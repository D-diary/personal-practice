// https://programmers.co.kr/learn/courses/30/lessons/12926

const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function isLower (s, n) {
  // const lower = 'abcdefghijklmnopqrstuvwxyz';
  for ( let i = 0; i < lower.length; i++ ) {
    if ( s[i] === lower[i] && i + n < lower.length ) {
      return true;
    }
  }
}

function isLower2 (s, n) {
  // const lower = 'abcdefghijklmnopqrstuvwxyz';
  for ( let i = 0; i < lower.length; i++ ) {
    if ( s[i] === lower[i] && i + n >= lower.length ) {
      return true;
    }
  }
}

function isUpper (s, n) {
  // const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for ( let i = 0; i < lower.length; i++ ) {
    if ( s[i] === upper[i] && i + n < lower.length ) {
      return true;
    }
  }
}

function isUpper2 (s, n) {
  // const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for ( let i = 0; i < lower.length; i++ ) {
    if ( s[i] === upper[i] && i + n >= lower.length ) {
      return true;
    }
  }
}

function solution(s, n) {
  let answer = '';

  for ( let i = 0; i < s.length; i++) {
    if ( s[i] === ' ' ) {
      answer += ' ';
    }
    for ( let j = 0; j < lower.length; j++) {
      if ( isLower(s, n) ) {
        answer += ( lower[ j + n ] );
      } else if ( isUpper(s, n) ) {
        answer += ( upper[ j + n ] );
      } else if ( isLower2(s, n) ) {
        answer += ( lower[ j + n - lower.length ] );
      } else if ( isUpper2(s, n) ) {
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