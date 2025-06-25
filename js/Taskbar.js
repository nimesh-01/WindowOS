function startmenu() {
    const startmenu = document.querySelector('.startmenu');
    const searchbar = document.getElementById('searchbar');
    let flag = false;

    window.toggleStartMenu = function () {
        flag = !flag;
        if (flag) {
            startmenu.style.display = "block";
            setTimeout(() => {
                startmenu.style.bottom = "52px";
            }, 100);
        } else {
            startmenu.style.bottom = "-100%";
            setTimeout(() => {
                startmenu.style.display = "none";
            }, 300)
        }
    }
    
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