// https://programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
  let answer = '';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  for ( let i = 0; i < s.length; i++) {
    if ( s[i] === ' ' ) {
      answer += ' ';
    }

    for ( let j = 0; j < lower.length; j++) {
      if ( s[i] === lower[j] && j + n < lower.length ) {
        answer += ( lower[ j + n ] );
      } else if ( s[i] === upper[j] && j + n < upper.length ) {
        answer += ( upper [ j + n ] );
      } else if ( s[i] === lower[j] && j + n >= lower.length ) {
        answer += ( lower[ j + n - lower.length ] );
      } else if ( s[i] === upper[j] && j + n >= upper.length ) {
        answer += ( upper[ j + n - lower.length ] );
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