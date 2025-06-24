function contextmenu() {
    let menu = document.getElementById('context-menu');
    let create = document.getElementById('create-folder');
    let wallpaper = document.getElementById("change-wallpaper");
    let foldermenu = document.getElementById('folder-menu');
    let rename = document.getElementById('rename');
    let deletes = document.getElementById("delete");
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
        createfolder(ls);
    })
    wallpaper.addEventListener("click", () => {
        console.log("wallpaper folder clicked");
    })
    rename.addEventListener('click', () => {
        console.log("renemae folder clicked");
    })
    deletes.addEventListener("click", () => {
        console.log(isFolder);
    })
}
function createfolder(ls) {
    let f = {
        "name": "Folder"+ls.length,
        "url": "assests/icons/folder.webp",
        "id": `d${ls.length}`
    }
    initialdata(f)
}