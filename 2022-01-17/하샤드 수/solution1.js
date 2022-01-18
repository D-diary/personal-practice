// https://programmers.co.kr/learn/courses/30/lessons/12947

// 코드 실행 통과 제출 실패
function solution(x) {
    var answer = true;
    const str = (x).toString().split('')
    console.log(x)
    num = Number(str[0]) + Number(str[1])
    console.log(num)
    if (number % num === 0) {
      return true
    } else if (number % num !== 0) {
      return false
    }
}

console.log(solution(18))
console.log(solution(17))