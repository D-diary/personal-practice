// https://programmers.co.kr/learn/courses/30/lessons/12925

function solution(s) {
  let answer = 0;

  for ( let i = 0; i < s.length; i++) {
    let temp = s[i]; // 1 2 3 4
    console.log('temp', temp);

    for ( let j = i + 1; j < s.length; j++) { // 반복 3 2 1 0
      temp += '0';
      console.log('temp', temp);
    }
    // 1000 200 30 4

    answer += Number(temp); // 1000 200 30 4
  }

  return answer;
}

// console.log(solution("1234")); // 1234
console.log(solution("-1234")); // -1234

// 통째로 넣지 X 한글자씩 넣기