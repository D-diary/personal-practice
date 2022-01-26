// https://programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
  let num = Array.from(String(n))
      .map(x => Number(x))
      .reduce((a, b) => a + b);

  return num;
}

console.log(solution(123));