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
            walls.style.left = (e.clientX - offsetX) + 'px';
            walls.style.top = (e.clientY - offsetY) + 'px';
        }
    });

    document.addEventListener('mouseup', function () {
        isDragging = false;
    });
});
