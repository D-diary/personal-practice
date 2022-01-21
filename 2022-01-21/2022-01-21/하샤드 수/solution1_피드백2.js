// https://programmers.co.kr/learn/courses/30/lessons/12947

// 코드 실행 통과 제출 실패
function solution(x) {
    const str = String(x).split('');
    console.log('str', str);

    let num = 0;
    for (let i = 0; i < str.length; i++) {
        num += Number(str[i]);
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