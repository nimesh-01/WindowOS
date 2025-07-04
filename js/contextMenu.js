
function contextmenu() {
    let menu = document.getElementById('context-menu');
    let create = document.getElementById('create-folder');
    let wallpaper = document.getElementById("change-wallpaper");
    let foldermenu = document.getElementById('folder-menu');
    let rename = document.getElementById('rename');
    let deletes = document.getElementById("delete");
const slider = document.getElementById("brightnessSlider");
    const overlay = document.getElementById("overlay");
    slider.addEventListener("input", () => {
        const opacity = ((100 - slider.value) / 100)-0.2;
    overlay.style.opacity = opacity;
    });
    const startmenu = document.querySelector('.startmenu');
    let isFolder = null
    document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        console.log(e);

        isFolder = e.target.closest(".items")
        if (isFolder) {
            console.log(isFolder);
            foldermenu.style.top = `${e.clientY}px`
            foldermenu.style.left = `${e.clientX}px`
            foldermenu.style.display = "block"
        }
        else {
            menu.style.top = `${e.clientY}px`
            menu.style.left = `${e.clientX}px`
            menu.style.display = "block"
        }
    })
    document.addEventListener("click", () => {
        menu.style.display = "none";
        foldermenu.style.display = "none";
    });
    create.addEventListener('click', () => {
        let ls = JSON.parse(localStorage.getItem("data"));
        createfolder();
    })
    wallpaper.addEventListener("click", () => {
        setWallpaper();
    })
    rename.addEventListener('click', () => {
        console.log(isFolder);
        renamefolder(isFolder)
    })
    deletes.addEventListener("click", () => {
        deletedata(isFolder)
    })
}
function setWallpaper() {
    let wallwindow = document.getElementById("Walls");
    wallwindow.classList.remove("hidden")

}
function removewallwindow() {
    let wallwindow = document.getElementById("Walls");
    wallwindow.classList.add("hidden")
}
function removewindow() {
    const folderWindow = document.querySelector(".folderwindow");
    folderId = folderWindow
    folderId.classList.remove('scale-100', 'opacity-100');
    folderId.classList.add('scale-0', 'opacity-0');
    setTimeout(() => {
        folderWindow.style.display = "none";
    }, 300); // match Tailwind's duration
}
const setWall = function (e) {
    initialwallpaper(e.target.src)
    removewallwindow()
}
function createfolder() {
    const folderName = prompt("Enter folder name:");
    if (folderName && folderName.trim() !== "") {
        const newFolder = {
            name: folderName,
            url: "assests/icons/folder.webp",
            id: `d${Date.now()}`
        };
        initialdata(newFolder);
    } else {
        alert("Folder name cannot be empty.");
    }
};