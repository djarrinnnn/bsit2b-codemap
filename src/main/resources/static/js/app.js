// Animated code rain background inspired by "The Matrix"
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.querySelector('.background-anim').appendChild(canvas);

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%&";
const fontSize = 18;
const columns = [];
for (let x = 0; x < window.innerWidth / fontSize; x++) {
    columns[x] = 1;
}

function draw() {
    ctx.fillStyle = "rgba(17,17,34,0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00ffe7";
    ctx.font = fontSize + "px monospace";
    for (let i = 0; i < columns.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, columns[i] * fontSize);
        if (columns[i] * fontSize > canvas.height && Math.random() > 0.975) {
            columns[i] = 0;
        }
        columns[i]++;
    }
}
setInterval(draw, 33);
