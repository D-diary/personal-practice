// https://programmers.co.kr/learn/courses/30/lessons/12948

// 1차 실패 
function solution(phone_number) {
  let p = phone_number
  let answer = '';
  for (let i = 0; i < p.length; i++) {
    if (p[i] != p[p.length-1]) {
      iter = p[i].replace('${p[i]}','*')
      console.log(iter)
    }
  }
  return ;
}
console.log(solution("01033334444"))