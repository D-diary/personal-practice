// https://programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
  let answer = [];
  
  for (let i = 0; i < arr.length; i++) {
    if ( arr[i] % divisor === 0 ) {
      answer.push(arr[i]);
    }
  }
  
  answer.sort(function (a,b) {
    return a - b;
  })
  
  if (answer.length < 1) {
    answer = [-1];
  }
  
  return answer;
  
  
}

console.log(solution([5,9,7,10],5))
console.log(solution([2, 36, 1, 3],1))
console.log(solution([3,2,6],10))

//sort를 for문으로 만드는법 여쭤보기