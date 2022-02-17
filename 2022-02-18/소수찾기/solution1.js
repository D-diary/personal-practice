// https://programmers.co.kr/learn/courses/30/lessons/12921

function solution(n) {
  let answer = 0;

  for ( let i = 0; i <= n; i++) {
    if ( i % i === 0 ) {
      console.log(i)
    }
  }

  return answer;
}

console.log(solution(10)); // 4
console.log(solution(5)); // 3