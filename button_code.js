let button = document.getElementById('click');
button.addEventListener('click', increaseOnClick);

let count = 0;

function increaseOnClick() {
    const output = document.getElementById('output');
    count++;
    output.textContent = 'Button was clicked ' + count + ' times!';
}