// https://programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
    const s = String(n);
    let num = 0;

    for (let i = 0; i < s.length; i++) {
        num += Number(s[i]);
    }

    return num;
}

console.log(solution(123)); // 6
console.log(solution(987)); // 24

// num을 선언하지 않고 모두 n으로 할수는 없을까요?
// 문자와 숫자변환되는 식을 한줄로 표현할 수 있을까요?

