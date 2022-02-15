function solution(s) {
  let answer = '';
  
  if ( s.length % 2 !== 0 ) {
      answer = s[s.length/2-0.5];
  } else {
      answer = s[s.length/2-1] + s[s.length/2];
  }
  
  return answer;
}

console.log(solution('abcde')); // c
console.log(solution('qwer')); // we