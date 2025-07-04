document.addEventListener('DOMContentLoaded', () => {
    let walls = document.getElementById('Walls');
    let dragable = document.getElementById('dragable');

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    dragable.addEventListener('mousedown', function (e) {
        isDragging = true;
        offsetX = e.clientX - walls.offsetLeft;
        offsetY = e.clientY - walls.offsetTop;
    });

    document.addEventListener('mousemove', function (e) {
        if (isDragging) {
            // Get viewport dimensions
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            document.body.classList.add("overflow-hidden");

            // Get element dimensions
            const wallWidth = walls.offsetWidth;
            const wallHeight = walls.offsetHeight;

            // Calculate new position
            let newLeft = e.clientX - offsetX;
            let newTop = e.clientY - offsetY;

            // Clamp the position to the viewport
            newLeft = Math.max(0, Math.min(newLeft, viewportWidth));
            newTop = Math.max(0, Math.min(newTop, viewportHeight));

            walls.style.left = newLeft + 'px';
            walls.style.top = newTop + 'px';
        }
    });

    document.addEventListener('mouseup', function () {
        isDragging = false;
    });
});
