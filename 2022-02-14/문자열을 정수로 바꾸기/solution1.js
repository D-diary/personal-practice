// https://programmers.co.kr/learn/courses/30/lessons/12925

function solution(s) {
  let answer = 0;

  for ( let i = 0; i < s.length; i++) {
    answer += Number(s[i]) 
    console.log(answer) // 
    for ( let j = i + 1; j < s.length; j++) {
      answer += '0'
    }
  }

  return answer;
}

console.log(solution("1234")); // 1234
// console.log(solution("-1234")); // -1234

// 통째로 넣지 X 한글자씩 넣기