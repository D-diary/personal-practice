// random.js

function random(end) {
    return Math.floor(Math.random() * end);
}

const arr = "ABCDEFABCDEF".split('');
function randomAlpha() {
    const r = random(arr.length);
    return arr.splice(r, 1)[0];
}

console.log(randomAlpha());
console.log(randomAlpha());
console.log(randomAlpha());
console.log(randomAlpha());
console.log(randomAlpha());
console.log(randomAlpha());
console.log(randomAlpha());
console.log(randomAlpha());
console.log(randomAlpha());
console.log(randomAlpha());
console.log(randomAlpha());
console.log(randomAlpha());