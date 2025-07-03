function initialdata(val) {
    if (val == null) {
        let ls = JSON.stringify(localStorage.getItem("data"));
        if (ls.length == 0 || ls == "null") {
            let data = [{
                "name": "PC",
                "url": "assests/icons/pc.png",
                "id": 'd1'
            }, {
                "name": "folder1",
                "url": "assests/icons/folder.webp",
                "id": 'd2'
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
    console.log(val);
    let folders = JSON.parse(localStorage.getItem("data") || []);
    let newfolders = folders.filter(f => f.id != val.id);
    localStorage.setItem("data", JSON.stringify(newfolders))
    if (newfolders.length == 0) {
        localStorage.removeItem('data');
        initialdata()
    }
    setFolders()
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
    let wall =JSON.parse(localStorage.getItem("wallpaper"));
    if (wall == null || wall == "" || wall == undefined) {
        localStorage.setItem("wallpaper", JSON.stringify("http://127.0.0.1:5500/assests/wallpaper/pexels-bess-hamiti-83687-36487.jpg"));
        wall = localStorage.getItem("wallpaper");
        console.log("chala ji");
        
    }

    let main = document.getElementById('main');
    if (main) {
        main.style.backgroundImage = `url(${wall })`;
    }
}
