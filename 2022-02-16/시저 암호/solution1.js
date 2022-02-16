// https://programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
  let answer = '';
  const alpha = 'abcdefghijklmnopqrstuvwxyz';

  for ( let i = 0; i < alpha.length; i++) {
    if ( n === alpha[i]) {
      console.log('yes')
    }
  }

  return answer;
}

console.log(solution("AB", 1)); // "BC"
console.log(solution("z", 1)); // "a"
console.log(solution("a B z", 4)); // "e F d"