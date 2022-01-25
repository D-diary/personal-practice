// https://programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
  let idx = 0;
  let result = new String();
  for (let i = 0; i < s.length; i++) {
    
    if(s[i]===" ") {
      idx = 0;
    }
    
    if (idx%2===0) {
      s[i].toUpperCase()
      console.log('up',s[i],idx,i)
    } else {
      s[i].toLowerCase()
      console.log('lo',s[i],idx,i)
    }
    idx ++;
  }  
}

console.log(solution("try hello world"))