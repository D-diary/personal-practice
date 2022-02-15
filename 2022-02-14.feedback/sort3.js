const arr = [3, 1, 2, 5, 4];

arr.sort(function (a, b) {
    return -1;
});
console.log(arr); // [4, 5, 2, 1, 3]