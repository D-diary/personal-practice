
// 코드 실행 통과 제출 실패
var number = 17
var str
var arr = []
function solution(x) {
    var answer = true;
    str = (x).toString().split('')
    console.log(x)
    num = Number(str[0]) + Number(str[1])
    console.log(num)
    if (number % num === 0) {
      return true
    } else if (number % num !== 0) {
      return false
    }
}

console.log(solution(number))