// https://programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
  let answer = '';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for ( let i = 0; i < lower.length; i++) {
    for ( let j = 0; j < s.length; j++) {
      if ( s[j] === lower[i] && i + n < lower.length) {
        answer += ( lower[i+n] );
      }
      if ( s[j] === lower[i] && i + n >= lower.length ) {
        answer += ( lower[ i + n - lower.length ] );
      }
    }
  }
  
  for ( let i = 0; i < upper.length; i++) {
    for ( let j = 0; j < s.length; j++) {
      if ( s[j] === upper[i] && i + n < upper.length ) {
        answer += (upper[i+n]);
        }
      if ( s[j] === upper[i] && i + n >= upper.length ) {
        answer += ( upper[ i + n - upper.length ] );
      }
    }
  }
  //  25 + 1 = 26 > 25

  return answer;
}

// console.log(solution("ab", 1)); // "bc"


// console.log(solution("Z", 1)); // "A"

// console.log(solution("AB", 1)); // "BC"
// console.log(solution("z", 1)); // "a"
console.log(solution("a B z", 4)); // "e F d"