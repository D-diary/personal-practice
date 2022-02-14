const arr = [3, 1, 2, 5, 4];
arr.sort(function (a, b) {
    // 오 름차순
    //          1  3  -2
    console.log(a, b, a - b);
    // a - b의 결과가 0보다 작을 때 a를 앞으로 보낸다.
    // a - b의 결과가 0보다 클 때 b를 a보다 앞으로 보낸다.
    
    // 5번줄의 결과를 잘 확인해봐요.
    // 음수 일 때도, 양수 일 때도 자리의 변화는 생겨요.
    return a - b;
});
console.log(arr);

