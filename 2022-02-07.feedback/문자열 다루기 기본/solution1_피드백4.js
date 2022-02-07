// https://programmers.co.kr/learn/courses/30/lessons/12918

function isNumber(c) {
    const numbers = '0123456789';
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === c) {
            return true;
        }
    }

    return false;
}

function solution(s) {
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        if (!isNumber(s[i])) {
            return false;
        }
    }

    return true;
}

console.log(solution("a234")); // false
console.log(solution("1234")); // true
console.log(solution("12 34")); // true
