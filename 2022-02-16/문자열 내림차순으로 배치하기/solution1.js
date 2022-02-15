// https://programmers.co.kr/learn/courses/30/lessons/12917

function solution(s) {
  let answer = '';
  let arr = [];
  
  arr = s.split('')
  arr.sort().reverse()
  
  answer = arr.join('')
  return answer;
}

console.log(solution('Zbcdefg')); // gfedcbZ
