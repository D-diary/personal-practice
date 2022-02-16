// https://programmers.co.kr/learn/courses/30/lessons/12917

// 메소드 없이 푸는 법

function solution(s) {
  let answer = '';
  let arr = [];
  
  arr = s.split('');
  arr.sort().reverse();
  
  answer = arr.join('');
  return answer;
}

console.log(solution('Zbcdefg')); // gfedcbZ
