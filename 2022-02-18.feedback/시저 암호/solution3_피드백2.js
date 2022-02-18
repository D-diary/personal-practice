// https://programmers.co.kr/learn/courses/30/lessons/12926

function isLower(c, n) {
    const lower = 'abcdefghijklmnopqrstuvwxyz';

    for (let j = 0; j < lower.length; j++) {
        let temp = j;
        if (c === lower[j]) {
            if (temp + n >= lower.length) {
                temp = temp - lower.length;
            }
            return lower[temp + n];
        }
    }

    return '';
}

function isUpper(c, n) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let j = 0; j < upper.length; j++) {
        let temp = j;
        if (c === upper[j]) {
            if (temp + n >= upper.length) {
                temp = temp - upper.length;
            }
            return upper[temp + n];
        }
    }

    return '';
}

function solution(s, n) {
    let answer = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            answer += ' ';
        }

        answer += isLower(s[i], n);
        answer += isUpper(s[i], n);
    }

    return answer;
}

// console.log(solution("ab", 1)); // "bc"
// console.log(solution("Z", 1)); // "A"
// console.log(solution("AB", 1)); // "BC"
// console.log(solution("z", 1)); // "a"
console.log(solution("a B z", 4)); // "e F d"