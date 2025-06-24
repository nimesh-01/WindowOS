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