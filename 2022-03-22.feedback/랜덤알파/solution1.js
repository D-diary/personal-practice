function random(end) {
    return Math.floor(Math.random() * end);
}

// 클로저
function makeRandomAlpha(s) {
    let arr = s.split('');

    return function () {
        const r = random(arr.length);

        console.log('mra arr', JSON.stringify(arr));

        return arr.splice(r, 1)[0];
    }
}

const randomAlpha = makeRandomAlpha('ABCDEFABCDEF');
console.log('randomAlpha', randomAlpha);

console.log(randomAlpha());
console.log(randomAlpha());
console.log(randomAlpha());
console.log(randomAlpha());
console.log(randomAlpha());
console.log(randomAlpha());
console.log(randomAlpha());