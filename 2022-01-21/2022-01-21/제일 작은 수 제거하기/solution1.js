// https://programmers.co.kr/learn/courses/30/lessons/12935

// 코드 실행 통과 채점 X

function solution(arr) {
  const desc = arr.sort(function(a,b){return b - a});
  const m = [-1];

  if (desc.length > 2) {
    desc.pop();
    return desc;
  } else if (desc.length <= 1) {
    return m;
  }
}

console.log(solution([4,1,2,3])); // [4, 3, 2]
console.log(solution([10])); // [-1]
