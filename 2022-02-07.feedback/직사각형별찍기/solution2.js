// https://programmers.co.kr/learn/courses/30/lessons/12969?language=javascript

// vscode에서는 정상적으로 출력되나 프로그래머스에서 output size differs
// 입력값이 5,3이 아닌 5 3 

function solution(x, y) {
  let star = '';
  
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      // console.log('*');
      star += '*'
    }
    star += `\n`
  }

  // result = star.join('')
  // console.log('re',result);
  // console.log('star',star);
  return star;
}

console.log(solution(5, 3));
// *****
// *****
// *****

console.log(solution(3, 5));
// ***
// ***
// ***
// ***
// ***