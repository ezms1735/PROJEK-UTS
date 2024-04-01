var backgroundElement = document.getElementById('background');

function moveBackground(x, y) {
    backgroundElement.style.backgroundPosition = x + 'px ' + y + 'px';
}

function handleMouseMove(event) {
    var moveX = event.clientX / 10;
    var moveY = event.clientY / 10; 

    moveBackground(moveX, moveY);
}

document.addEventListener('mousemove', handleMouseMove);
