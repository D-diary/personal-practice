// 셔플 함수를 만드시오.

// function random(end) {
//   return Math.floor(Math.random() * end);
// }

function solution(arr) {
  let array = [];
  array = arr.sort(() => Math.random() - 0.5);
  return array;
}

console.log(solution([1, 2, 3, 4, 5])); // [3, 2, 1, 4, 5] 결과는 실행마다 달라질 수 있음.