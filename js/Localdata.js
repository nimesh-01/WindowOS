function initialdata(val) {
    if (val == null) {
        let data = [{
            "name": "PC",
            "url": "assests/icons/pc.png"
        }, {
            "name": "folder1",
            "url": "assests/icons/folder.webp"
        }]
        localStorage.setItem("data", JSON.stringify(data))
    } else {
        let folders = JSON.parse(localStorage.getItem("data") || []);
        if (val != null) folders.push(val);
        localStorage.setItem("data", JSON.stringify(folders))
    }
    setFolders()
}