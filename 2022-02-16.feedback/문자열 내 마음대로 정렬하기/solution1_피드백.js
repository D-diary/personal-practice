// https://programmers.co.kr/learn/courses/30/lessons/12915


function solution(strings, n) {
    // const arr = strings;
    const arr = Array.prototype.slice.call(strings);

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i][n] > arr[j][n]) {
                // const temp = arr[i];
                // arr[i] = arr[j];
                // arr[j] = temp;

                [arr[i], arr[j]] = [arr[j], arr[i]];
            }

            if (arr[i][n] === arr[j][n]) {
                if (arr[i] > arr[j]) {
                    // const temp = arr[i];
                    // arr[i] = arr[j];
                    // arr[j] = temp;
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            }
        }
    }

    // console.log(strings);
    return arr;
}


console.log(solution(['sun', 'bed', 'car'], 1)); // ["car", "bed", "sun"]
// console.log(solution(["abce", "abcd", "cdx"], 2)); // ["abcd", "abce", "cdx"]

