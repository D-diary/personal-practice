// https://programmers.co.kr/learn/courses/30/lessons/12969?language=javascript

function solution(x, y) {
  let star = [];
  
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      // console.log('*');
      star.push('*');
    }
    result = `${star}\n`
  }

  result = star.join('')
  console.log('re',result);
  console.log('star',star);
}

console.log(solution(5, 3));
// *****
// *****
// *****

// console.log(solution(3, 5));
// ***
// ***
// ***
// ***
// ***