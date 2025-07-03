function startmenu() {
    const startmenu = document.querySelector('.startmenu');
    const systembar = document.querySelector('.systembar');
    const windowsButton = document.getElementById('windows');
    const basicnetwork = document.getElementById('basicnetwork');
    let flag = false;
    let sflag = false;

    setupTaskbarItems();

    windowsButton.addEventListener('click', (e) => {
        flag = !flag;

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
            }, 300);
        }
        e.stopPropagation();
    })
    basicnetwork.addEventListener('click', (e) => {
        sflag = !sflag;

        if (sflag) {
            systembar.style.display = "block";
            document.body.classList.add("overflow-hidden");
            setTimeout(() => {
                systembar.style.bottom = "52px";
            }, 100);
        } else {
            systembar.style.bottom = "-100%";
            setTimeout(() => {
                systembar.style.display = "none";
            }, 300);
        }
        e.stopPropagation();
    }
    );

    document.addEventListener("click", () => {
        flag = false;
        // sflag = false
        startmenu.style.bottom = "-100%";
        // systembar.style.bottom = "-100%";

        setTimeout(() => {
            startmenu.style.display = "none";
            // systembar.style.display = "none";

        }, 300);
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

function setupTaskbarItems() {
    const icons = [
        { id: "youtube", windowClass: ".youtube" },
        { id: "chrome", windowClass: ".chrome" },
        { id: "vscode", windowClass: ".vscode" }
    ];

    let currentlyOpen = null;
    const folderBtn = document.querySelector('.folderBtn')
    const folderWindow = document.querySelector(".folderwindow");
    const folderId = folderWindow;
    icons.forEach(icon => {
        const button = document.getElementById(icon.id);
        const windowElement = document.querySelector(icon.windowClass);

        button.addEventListener('click', (e) => {
            e.stopPropagation();

            // Close folder window if open
            folderWindow.style.display = "none";

            if (currentlyOpen && currentlyOpen !== windowElement) {
                currentlyOpen.style.bottom = "-100%";
                setTimeout(() => {
                    currentlyOpen.style.display = "none";
                    windowElement.style.display = "block";
                    document.body.classList.add("overflow-hidden");
                    setTimeout(() => {
                        windowElement.style.bottom = "52px";
                    }, 100);
                    currentlyOpen = windowElement;
                }, 150);
            } else if (currentlyOpen === windowElement) {
                windowElement.style.bottom = "-100%";
                setTimeout(() => {
                    windowElement.style.display = "none";
                }, 150);
                currentlyOpen = null;
            } else {
                windowElement.style.display = "block";
                document.body.classList.add("overflow-hidden");
                setTimeout(() => {
                    windowElement.style.bottom = "52px";
                }, 100);
                currentlyOpen = windowElement;
            }
        });
    });

    // 📁 Folder button
    folderBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        console.log("Burron clicked");

        // Close any other app windows
        if (currentlyOpen) {
            currentlyOpen.style.bottom = "-100%";
            setTimeout(() => {
                currentlyOpen.style.display = "none";
            }, 150);
            currentlyOpen = null;
        }
        const isOpen = folderId.classList.contains('scale-100');

        if (isOpen) {
            folderId.classList.remove('scale-100', 'opacity-100');
            folderId.classList.add('scale-0', 'opacity-0');
            setTimeout(() => {
                folderWindow.style.display = "none";
            }, 300); // match Tailwind's duration
        } else {
            folderWindow.style.display = "block"; // show first

            // allow a frame to paint, then trigger animation
            setTimeout(() => {
                folderId.classList.remove('scale-0', 'opacity-0');
                folderId.classList.add('scale-100', 'opacity-100');
            }, 10); // just enough delay to trigger transition
        }

    });

    // Click outside closes all
    document.addEventListener('click', () => {
        if (currentlyOpen) {
            currentlyOpen.style.bottom = "-100%";
            setTimeout(() => {
                currentlyOpen.style.display = "none";
            }, 150);
            currentlyOpen = null;
        }
    });
}

function workingofsystemitems(e) {
    let val = e.target.closest(".systembut");

    if (val) {
        if (val.classList.contains('bg-blue-500')) {
            val.classList.remove('bg-blue-500', 'text-white');
        } else {
            val.classList.add('bg-blue-500', 'text-white');
        }
    }
}



startmenu();
