// https://programmers.co.kr/learn/courses/30/lessons/12954


function solution(x, n) {
    let answer = [];
    let a = 0
    for (var i = 0; i < n; i++ ) {
      a += x
      answer.push(a)
    }
    return answer;
}

console.log(solution(2, 5)) // [2,4,6,8,10]
console.log(solution(4, 3)) // [4,8,12]
console.log(solution(-4, 2)) // [-4, -8]

