// https://programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
  let i = 0;
  
  while(num!==1){
    if(num%2===0) {
      num = num / 2;
    } else if (num%2!==0) {
      num = (num * 3) + 1;
    }
    i = i + 1;
    
    if(i>500) {
      return -1
    }
  return i  
  }
}

console.log(solution(6))