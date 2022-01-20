// https://programmers.co.kr/learn/courses/30/lessons/12937

function solution(num) {
  if (num %2 === 0)  {
      return "Even";
  } else if (num %2 !== 0) {
      return "Odd";
  }
}

console.log(solution(3));
console.log(solution(4));