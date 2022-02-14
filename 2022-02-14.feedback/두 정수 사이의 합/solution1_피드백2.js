// https://programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
    let answer = 0;

    if (a > b) {
        [a, b] = [b, a];
    }

    for (let i = a; i <= b; i++) {
        answer = answer + i;
    }

    return answer;
}

console.log(solution(3, 5));
console.log(solution(3, 3));
console.log(solution(5, 3));