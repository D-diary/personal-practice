// https://programmers.co.kr/learn/courses/30/lessons/12925

function solution(s) {
  let answer = 0;

  let negative = false;
  if (s[0] === '-') {
    s = s.substring(1);
    negative = true;
  }

  for ( let i = 0; i < s.length; i++) {
    let temp = s[i] + '0'.repeat(s.length - (i + 1));
    console.log('temp', temp);
    // 1000 200 30 4

    answer += Number(temp); // 1000 200 30 4
  }

  if (negative) {
    answer = answer * -1;
  }

  return answer;
}

console.log(solution("1234")); // 1234
console.log(solution("-1234")); // -1234

// 통째로 넣지 X 한글자씩 넣기