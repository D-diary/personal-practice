// https://programmers.co.kr/learn/courses/30/lessons/12969?language=javascript

function solution(x, y) {
  let star = [];
  
  for (let i = 0; i < y; i++) {
    console.log('i',i);

    for (let j = 0; j < x; j++) {
      console.log('*');
      star.push('*');
      console.log('j',j);
    }
  }

  result = star.join('')
  console.log(result)
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