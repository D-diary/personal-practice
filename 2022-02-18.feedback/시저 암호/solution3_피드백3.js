// https://programmers.co.kr/learn/courses/30/lessons/12926

function f(c, n, alphabetCase) {
    for (let j = 0; j < alphabetCase.length; j++) {
        let temp = j;
        if (c === alphabetCase[j]) {
            if (temp + n >= alphabetCase.length) {
                temp = temp - alphabetCase.length;
            }
            return alphabetCase[temp + n];
        }
    }

    return '';
}

function isLower(c, n) {
    const lower = 'abcdefghijklmnopqrstuvwxyz';

    return f(c, n, lower);
}

function isUpper(c, n) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    return f(c, n, upper);
}

function solution(s, n) {
    let answer = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            answer += ' ';
        }

        // answer += f(s[i], n, 'abcdefghijklmnopqrstuvwxyz');
        // answer += f(s[i], n, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
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