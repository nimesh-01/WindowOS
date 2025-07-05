const recyclebinIcon = document.getElementById("RB");
// const recycleWindow = document.getElementById("recycleWindow");
document.addEventListener("DOMContentLoaded", function () {
    const recycleWindow = document.querySelector(".recyclewindowss");

    document.addEventListener("dblclick", function (e) {
        const clickedItem = e.target.closest(".items");

        if (clickedItem && clickedItem.id === "RB") {
            recycleWindow.classList.remove('hidden');
            renderRecycleBin();
            setTimeout(() => {
                recycleWindow.classList.remove("scale-0", "opacity-0");
                recycleWindow.classList.add("scale-100", "opacity-100");
            }, 10);
        }
    });
});


// Close Recycle Bin Window
function closeRecycleBin() {
    recycleWindow.classList.remove("scale-100", "opacity-100");
    recycleWindow.classList.add("scale-0", "opacity-0");
    setTimeout(() => {
        recycleWindow.classList.remove('hidden');
    }, 300);
}
function deletepermanently() {
    localStorage.removeItem('recycleBin')
    renderRecycleBin()
}
// Render Recycle Bin Items from LocalStorage
function renderRecycleBin() {
    const recycleContent = document.getElementById("recycleContent");
    if (!recycleContent) {
        console.error("Recycle Content element not found in the DOM.");
        return;
    }

    const recycleData = JSON.parse(localStorage.getItem("recycleBin")) || [];
    recycleContent.innerHTML = "";

    if (recycleData.length === 0) {
        recycleContent.innerHTML = `<div class="col-span-full text-center text-gray-500">Recycle Bin is empty</div>`;
        return;
    }

    recycleData.forEach(item => {
        const div = document.createElement("div");
        div.className = "text-center h-max p-2 hover:bg-gray-100 rounded shadow-[0_2px_8px_rgba(10,10,10,0.14)]";

        div.innerHTML = `
    <div class="text-4xl">
        <img src="./assests/icons/recycle-bin.png" alt="Recycle Bin Icon" class="inline-block w-8 h-8">
    </div>
    <div class="font-medium">${item.name}</div>
    <div class="text-xs text-gray-500">Deleted Item</div>
`;

        recycleContent.appendChild(div);
    });
}


function initialdata(val) {
    if (val == null) {
        let ls = JSON.stringify(localStorage.getItem("data"));
        if (ls.length == 0 || ls == "null") {
            let data = [{
                "name": "PC",
                "url": "assests/icons/pc.png",
                "id": 'PC'
            },
            {
                "name": "Recycle bin",
                "url": "assests/icons/recycle-bin.png",
                "id": 'RB'
            },
            {
                "name": "folder1",
                "url": "assests/icons/folder.webp",
                "id": 'f1'
            }]
            localStorage.setItem("data", JSON.stringify(data))
        }
    } else {
        let folders = JSON.parse(localStorage.getItem("data") || []);
        if (val != null) folders.push(val);
        localStorage.setItem("data", JSON.stringify(folders))
    }
    setFolders()
}
function deletedata(val) {
    let folders = JSON.parse(localStorage.getItem("data") || "[]");
    let newfolders = folders.filter(f => f.id != val.id);

    // Move to recycle bin
    let recycleBin = JSON.parse(localStorage.getItem("recycleBin") || "[]");
    const deletedItem = folders.find(f => f.id === val.id);
    if (deletedItem) {
        recycleBin.push(deletedItem);
        localStorage.setItem("recycleBin", JSON.stringify(recycleBin));
    }

    localStorage.setItem("data", JSON.stringify(newfolders));
    if (newfolders.length == 0) {
        localStorage.removeItem("data");
        initialdata();
    }
    setFolders();
}
function renamefolder(val, name) {
    console.log(val);

    let folders = JSON.parse(localStorage.getItem("data") || "[]"); // Fix parsing default

    const updatedfolder = folders.map(f => {
        if (f.id === val.id) {
            const newName = prompt("Rename folder", f.name);
            if (newName !== "") {
                return { ...f, name: newName };
            }
        }
        return f;
    });

    localStorage.setItem("data", JSON.stringify(updatedfolder));
    setFolders();
}

function initialwallpaper(url) {
    localStorage.setItem("wallpaper", JSON.stringify(url))
    setinitialwallpaper()
}
function setinitialwallpaper() {
    let wall = JSON.parse(localStorage.getItem("wallpaper"));
    if (wall == null || wall == "" || wall == undefined) {
        localStorage.setItem("wallpaper", JSON.stringify("http://127.0.0.1:5500/assests/wallpaper/pexels-bess-hamiti-83687-36487.jpg"));
        wall = localStorage.getItem("wallpaper");
        console.log("chala ji");

    }

    let main = document.getElementById('main');
    if (main) {
        main.style.backgroundImage = `url(${wall})`;
    }
}
