// https://programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
  let num = Array.from(String(n)).map(function (x) {
    // console.log('map', typeof x);
    return Number(x);
  }).reduce(function (a, b) {
    return a + b;
  });
  // console.log(num);
  return num;
}

console.log(solution(123));