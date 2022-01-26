// https://programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
  let num = String(n);
  
  num = Number(n[0])
  
  for (let i = 0; i < n.length - 1; i++) {
    num += Number(n[i+1]);
  }
  return num;
};

console.log(solution(123));