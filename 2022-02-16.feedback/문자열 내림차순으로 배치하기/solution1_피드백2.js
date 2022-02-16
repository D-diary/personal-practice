// https://programmers.co.kr/learn/courses/30/lessons/12917

// 메소드 없이 푸는 법

function solution(s) {
  return s.split('').sort().reverse().join('');
}

console.log(solution('Zbcdefg')); // gfedcbZ
