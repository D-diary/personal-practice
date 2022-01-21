// https://programmers.co.kr/learn/courses/30/lessons/12947

// 코드 실행 통과 제출 실패
function solution(x) {
    const s = String(x);
    const arr = [];

    for (let i = 0; i < s.length; i++) {
        arr.push(s[i]);
    }
    console.log('arr', arr);

    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num += Number(arr[i]);
    }
    console.log('num', num);

    if (x % num === 0) {
      return true;
    } else if (x % num !== 0) {
      return false;
    }
}

// console.log(solution(18)); // true
console.log(solution(123)); // false
// console.log(solution(17));