// https://programmers.co.kr/learn/courses/30/lessons/12948


function solution(phone_number) {
  let p = phone_number
  let answer = '';
  console.log(p[p.length-1])
  for (let i = 0; i < p.length; i++) {
    if (p[i] != p[p.length-1]) {
      iter = p[i].replace('${p[i]}','*')
      console.log(iter)
    }
  }
  return ;
}
console.log(solution("01033334444"))