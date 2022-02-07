// https://programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
    const str = 'abcdefghijklmnopqrstuvwxyz ';

    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        console.log('c', c);

        for (let j = 0; j < str.length; j++) {
            if (str[j] === c) {
                return false;
            }
        }
    }

    return true;
}

console.log(solution("a234")); // false
console.log(solution("1234")); // true
console.log(solution("12 34")); // true
console.log(solution("$1234")); // false
