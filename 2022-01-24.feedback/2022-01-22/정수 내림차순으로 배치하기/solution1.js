// https://programmers.co.kr/learn/courses/30/lessons/12933


function solution(n) {
    const arr = (n + "").split('');
    arr.sort(function (a, b) {
        return b - a
    });

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }

    const arr1 = arr.join('');
    const result = Number(arr1);

    return result;
}


console.log(solution(118372)); // 873211