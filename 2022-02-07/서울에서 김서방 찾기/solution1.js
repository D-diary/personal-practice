// https://programmers.co.kr/learn/courses/30/lessons/12919

function solution(seoul) {
  let answer = '';
  for (let i = 0; i < seoul.length; i++) {
      if (seoul[i] === 'Kim') {
          answer = `김서방은 ${i}에 있다`
      }
  }
  return answer;
}

console.log(solution(["Jane", "Kim"])) // "김서방은 1에 있다"