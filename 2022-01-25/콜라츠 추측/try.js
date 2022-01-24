function solution(num) {
  let i = 0;
  while(num!==1){
    if(num%2===0) {
      num = num / 2;
    } else if (num%2!==0) {
      num = (num * 3) + 1;
    }
    i++;
    
    if(i>500) {
      return -1
    }
    
  }
}

console.log(solution(6))