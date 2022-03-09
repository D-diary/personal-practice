// 셔플 함수를 만드시오.

function random(end) {
  return Math.floor(Math.random() * end);
}

function solution(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
      const r1 = random(arr.length); // 2
      const r2 = random(arr.length); // 4

      const temp = arr[r1];
      arr[r1] = arr[r2];
      arr[r2] = temp;

    }
    result = arr;
    return result;
}

console.log(solution([1, 2, 3, 4, 5])); // [3, 2, 1, 4, 5] 결과는 실행마다 달라질 수 있음.
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 2, 3, 4, 5]));