// https://programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
  let answer = true;

  for ( let i = 0; i < s.length; i++) {
    if ( s.length === 4 ) {
      if ( isNaN(s[i]) ) {
        answer = false;
      } else {
        answer = true;
      }
    }
    
    if ( s.length === 6 ) {
      if ( isNaN(s[i]) ) {
        answer = false;
      } else {
        answer = true;
      }
    }
  }

  return answer;
}

console.log(solution("a234")); // false
console.log(solution("1234")); // true

// 코드 실행 통과 채점 87.5 실패