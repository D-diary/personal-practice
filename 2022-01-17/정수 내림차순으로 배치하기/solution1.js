// https://programmers.co.kr/learn/courses/30/lessons/12933


function solution(n) {
  const arr = (n+"").split('');
  console.log(arr)
  arr.sort(function(a,b){return b-a});    
  console.log(arr)
  for ( let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i])
  }
  return arr
}


console.log(solution(118372))

// 여쭤보고 싶은 코드

// function solution(n) {
//     const arr = (n+"").split('');
//     arr.sort(function(a,b){return b-a});    
//     var answer = Number(arr.toString().replace(/\,/g,''));
//     return answer;
// }

// console.log(solution(118372))