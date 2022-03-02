const arr = [1, 2, 3];

arr.forEach(function (x) {
    console.log(x);
    if (x === 2) {
        console.log('===========');
        break;
    }
});