function startmenu() {
    const startmenu = document.querySelector('.startmenu');
    const windowsButton = document.getElementById('windows');
    let flag = false;
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
    });

    document.addEventListener("click", () => {
        flag = false;
        startmenu.style.bottom = "-100%";
        setTimeout(() => {
            startmenu.style.display = "none";
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

    icons.forEach(icon => {
        const button = document.getElementById(icon.id);
        const windowElement = document.querySelector(icon.windowClass);

        button.addEventListener('click', (e) => {
            e.stopPropagation();

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
                // If same window clicked, toggle off
                windowElement.style.bottom = "-100%";
                setTimeout(() => {
                    windowElement.style.display = "none";
                }, 150);
                currentlyOpen = null;

            } else {
                // No window open, show clicked one
                windowElement.style.display = "block";
                document.body.classList.add("overflow-hidden");
                setTimeout(() => {
                    windowElement.style.bottom = "52px";
                }, 100);

                currentlyOpen = windowElement;
            }
        });
    });

    // Click anywhere else closes open window
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



startmenu();
