// https://programmers.co.kr/learn/courses/30/lessons/12918

function fn(s) {
  for ( let i = 0; i < s.length; i++) {
    if ( isNaN(s[i]) ) {
      answer = false;
      console.log('inIf',s[i]); // a
    }
    console.log('inFor',s[i]); 
  }

  return answer;
}

function solution(s) {
  let answer = true;

  if ( s.length === 4 ) {
    fn(s)

  
  if ( s.length === 6 ) {
    fn(s)
  }
}

  return answer;
}

console.log(solution("a234")); // false
console.log(solution("1234")); // true

// 코드 실행 통과 채점 62.5 실패