const board = document.querySelector('#board');
const colors = ['#28062E', '#45184C', '#531C5B', '#773881', '#AC5CB8', '#D382E0', '#E8B6EF'];
const SQUARES_NUMBER = 497;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', setColor);

    square.addEventListener('mouseleave', removeColor);


    board.append(square);
}

function setColor(event) {
    const elem = event.target;
    const color = getRandomColor();
    elem.style.backgroundColor = color;
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
    const elem = event.target;
    elem.style.backgroundColor = '#1d1d1d';
    elem.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}