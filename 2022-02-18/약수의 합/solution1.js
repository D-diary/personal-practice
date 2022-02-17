// https://programmers.co.kr/learn/courses/30/lessons/12928

function solution(n) {
  let answer = 0;
  let index = 1;
  
  while ( index <= n ) {
      if( n % index === 0 ) {
          answer += index;
      }
      index += 1;
  }
  
  return answer;
}

console.log(solution(12)); // 28
console.log(solution(5)); // 6