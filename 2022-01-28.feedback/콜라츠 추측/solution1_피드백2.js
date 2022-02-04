// https://programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
    for (let i = 0; i < 500; i++) {
        if (num === 1) {
            return i;
        }

        if (num % 2 === 0) {
            num = num / 2;
        } else if (num % 2 !== 0) {
            num = (num * 3) + 1;
        }
    }

    return -1;
}


console.log(solution(6)); // 8
console.log(solution(16)); // 4
console.log(solution(626331)); // -1
console.log(solution(1)); // 0