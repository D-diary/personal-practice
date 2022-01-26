// https://programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
    let idx = 0;
    let result = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            idx = -1;
        }

        if (idx % 2 === 0) {
            result += s[i].toUpperCase()
            console.log('up', s[i], idx, i)
        } else {
            result += s[i].toLowerCase()
            console.log('lo', s[i], idx, i)
        }

        idx++;
    }

    return result
}

console.log(solution("try hello world"))
console.log(solution("trya bchello world"))

// 9번줄 idx = -1; 말고 다른 방법으로 초기화 할 수 있는지