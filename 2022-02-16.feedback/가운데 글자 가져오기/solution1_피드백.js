// https://programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
  let answer = '';
  const middle = Math.floor(s.length / 2);
  
  if (s.length % 2 === 0) {
      answer = s[middle - 1] + s[middle];
  } else {
      answer = s[middle];
  }
  
  return answer;
}

console.log(solution('abcde')); // c
console.log(solution('qwer')); // we