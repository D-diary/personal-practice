const arr = [3, 4, 1, 5, 2];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         console.log(arr[i], arr[j]);
//     }
// }

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        console.log(i, j, ' | ', arr[i], arr[j]);

        if (arr[i] > arr[j]) {
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        console.log(arr);
        console.log()
    }
}
