// https://programmers.co.kr/learn/courses/30/lessons/12948

// 모든 숫자열 내 i번째와 같은 값을 빼버림
function solution(phone_number) {
    let result = '';

    for (let i = 0; i < phone_number.length - 4; i++) {
        result += '*';
    }
    console.log(result);

    for (let i = phone_number.length - 4; i < phone_number.length; i++) {
        result += phone_number[i];
    }
    console.log(result);

    return result;
}
console.log(solution("01033334444")); // '*******4444'
console.log(solution("027778888")) // '*****8888'