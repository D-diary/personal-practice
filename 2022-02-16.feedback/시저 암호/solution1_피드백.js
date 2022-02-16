// https://programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
    let answer = '';
    const alpha = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < alpha.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (s[j] === alpha[i]) {
                console.log(alpha[i + n - alpha.length]);
            }
        }
    }

    return answer;
}

console.log(solution("z", 3)); // "a"
// console.log(solution("ab", 1)); // "bc"
// console.log(solution("AB", 1)); // "BC"
// console.log(solution("z", 1)); // "a"
// console.log(solution("a B z", 4)); // "e F d"

// console.log(25 + 1 > 25);
// console.log(25 + 1 - 26);
