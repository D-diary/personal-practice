// https://programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        console.log('c', c);

        let flag = false; // 깃발
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[j] === c) {
                flag = true;
                break;
            }
        }

        if (!flag) {
            return false;
        }
    }

    return true;
}

// console.log(solution("a234")); // false
// console.log(solution("1234")); // true
console.log(solution("12 34")); // true
