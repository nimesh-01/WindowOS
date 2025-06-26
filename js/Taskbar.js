function startmenu() {
    const startmenu = document.querySelector('.startmenu');
    const youtube = document.querySelector('.youtube');
    const chrome = document.querySelector('.chrome');
    const vscode = document.querySelector('.vscode');


    let flag = false;
    let youtubeflag = false
    let chromeflag = false
    let vscodeflag = false
 
     window.toggleStartMenu = function (e) {
        flag = !flag

        if (flag) {
            startmenu.style.display = "block";
            document.body.classList.add("overflow-hidden");
            setTimeout(() => {
                startmenu.style.bottom = "52px";
            }, 100);
        } else {
            startmenu.style.bottom = "-100%";
            setTimeout(() => {
                startmenu.style.display = "none";
            }, 300)
        }
        e.stopPropagation();
    }

    window.chrome = function (e) {
        chromeflag = !chromeflag

        if (chromeflag) {
            chrome.style.display = "block";
            document.body.classList.add("overflow-hidden");
            setTimeout(() => {
                chrome.style.bottom = "52px";
            }, 100);
        } else {
            chrome.style.bottom = "-100%";
            setTimeout(() => {
                chrome.style.display = "none";
            }, 300)
        }
        e.stopPropagation();
    }
    window.vscode = function (e) {
        vscodeflag = !vscodeflag

        if (vscodeflag) {
            vscode.style.display = "block";
            document.body.classList.add("overflow-hidden");
            setTimeout(() => {
                vscode.style.bottom = "50px";
            }, 100);
        } else {
            vscode.style.bottom = "-100%";
            setTimeout(() => {
                vscode.style.display = "none";
            }, 300)
        }
        e.stopPropagation();
    }
    window.youtube = function (e) {
        youtubeflag = !youtubeflag

        if (youtubeflag) {
            youtube.style.display = "block";
            document.body.classList.add("overflow-hidden");
            setTimeout(() => {
                youtube.style.bottom = "52px";
            }, 100);
        } else {
            youtube.style.bottom = "-100%";
            setTimeout(() => {
                youtube.style.display = "none";
            }, 300)
        }
        e.stopPropagation();
    }
document.addEventListener("click", () => {
        flag=false
        startmenu.style.bottom = "-100%";
    });
    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const dateString = now.toLocaleDateString();
        document.getElementById("time").innerText = `${hours}:${minutes}`;
        document.getElementById("date").innerText = `${dateString}`;
    }
    updateClock();
    setInterval(updateClock, 1000);
}