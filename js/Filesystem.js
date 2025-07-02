function setFolders() {
    console.log("chala");
    let d = JSON.parse(localStorage.getItem("data"))
    console.log(d);
    let count = 1
    let m = document.getElementById('main');
    m.innerHTML = ""
    document.addEventListener("click", (e) => {
        console.log("Ok");
        if (!e.target.closest(".items")) {
            document.querySelectorAll(".items").forEach(item => {
                item.style.backgroundColor = "transparent"
            })
        }
    })
    d.forEach(el => {
        let div = document.createElement("div")
        let img = document.createElement("img")
        let innerdiv = document.createElement("div")
        div.classList.add("items")
        // img.classList.add("items")
        // innerdiv.classList.add("items")

        img.src = el.url
        img.alt = el.name + "image"

        innerdiv.innerText = (el.name).slice(0, 15);

        div.addEventListener("click", (obj) => {
            // console.log(obj);
            document.querySelectorAll(".items").forEach(item => {
                item.style.backgroundColor = "transparent"
            })
            Object.assign(div.style, {
                backgroundColor: "rgba(202, 202, 202, 0.14)"
            });
        })

        Object.assign(img.style, {
            width: "50px",
            height: "50px",
            objectFit: "cover",
            borderRadius: "10px"
        });


        Object.assign(div.style, {
            width: "70px",
            margin: "5px",
            padding: "5px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "0px",
            boxShadow: "0 2px 8px rgba(10, 10, 10, 0.14)",
            borderRadius: "5px"
        });

        Object.assign(innerdiv.style, {
            color: "white",
            width: "100px",
            padding: "5px",
            textAlign: "center",
            wordWrap: "break-word",
            overflowWrap: "break-word",
            whiteSpace: "normal",
        });


        innerdiv.style.color = "white"
        innerdiv.style.width = "100%"
        div.id = `${el.id}`
        div.appendChild(img)
        div.appendChild(innerdiv)
        m.appendChild(div);
    });

}
