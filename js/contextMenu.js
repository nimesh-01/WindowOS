
function contextmenu() {
    let menu = document.getElementById('context-menu');
    let create = document.getElementById('create-folder');
    let wallpaper = document.getElementById("change-wallpaper");
    let foldermenu = document.getElementById('folder-menu');
    let rename = document.getElementById('rename');
    let deletes = document.getElementById("delete");

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
        console.log("renemae folder clicked");
    })
    deletes.addEventListener("click", () => {
        console.log(isFolder);
    })
}
function setWallpaper() {
    let wallwindow = document.getElementById("Walls");
    wallwindow.classList.remove("hidden")

}
function removewindow() {
    let wallwindow = document.getElementById("Walls");
    wallwindow.classList.add("hidden")
}
const setWall = function (e) {
    initialwallpaper(e.target.src)
    removewindow()
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