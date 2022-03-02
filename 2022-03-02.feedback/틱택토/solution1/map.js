const arr = [1, 2, 3];

arr.map(function (x) {
    console.log(x);
    if (x === 2) {
        console.log('===========');
        return;
    }
});