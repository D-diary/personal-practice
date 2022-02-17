// https://programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
  let answer = '';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  for ( let j = 0; j < s.length; j++) {
    if ( s[j] === ' ' ) {
      answer += ' ';
    }
    for ( let i = 0; i < lower.length; i++) {
      if ( s[j] === lower[i] && i + n < lower.length ) {
        answer += ( lower[ i + n ] );
      } else if ( s[j] === upper[i] && i + n < upper.length ) {
        answer += ( upper [ i + n ] );
      } else if ( s[j] === lower[i] && i + n >= lower.length ) {
        answer += ( lower[ i + n - lower.length ] );
      } else if ( s[j] === upper[i] && i + n >= upper.length ) {
        answer += ( upper[ i + n - lower.length ] );
      }
    }
  }

  return answer;
}

// console.log(solution("ab", 1)); // "bc"


// console.log(solution("Z", 1)); // "A"

// console.log(solution("AB", 1)); // "BC"
// console.log(solution("z", 1)); // "a"
console.log(solution("a B z", 4)); // "e F d"