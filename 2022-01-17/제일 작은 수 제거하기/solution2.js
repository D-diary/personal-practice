// https://programmers.co.kr/learn/courses/30/lessons/12935

// 코드 실행 통과 채점 X

function solution(arr) {
  if (arr.length > 2) {
      arr.pop();
      return arr;
  } else if (arr.length <= 1) {
      arr = [-1];
      return arr;
  }
}

console.log(solution([4,3,2,1])); // [4, 3, 2]
console.log(solution([10])); // [-1]


