function contextmenu() {
    let menu = document.getElementById('context-menu');
    let create = document.getElementById('create-folder');
    let wallpaper = document.getElementById("change-wallpaper");

    console.log(menu);

    document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        console.log("in event");
        menu.style.top = `${e.clientY}px`
        menu.style.left = `${e.clientX}px`
        menu.style.display = "block"
    })
    document.addEventListener("click", () => {
        menu.style.display = "none";
    });
    create.addEventListener('click', () => {
        createfolder();
    })
    wallpaper.addEventListener("click", () => {
        console.log("create folder clicked");
    })
}

function createfolder() {

    let f = {
        "name": "Folder",
        "url": "assests/icons/folder.webp"
    }
    initialdata(f)
}