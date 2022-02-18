// https://programmers.co.kr/learn/courses/30/lessons/12915

// 2중 for문 말고 다른방식으로도 가능한지 질문하기 -> 불가능

function solution(strings, n) {
  let str = strings
  
  for (let i = 0; i < str.length; i++) {
    if ( str[i][n] > str[i+1][n] ) {
      let temp = [];
      let idx1 = str[i+1]
      temp = str[i]
      str[i] = idx1
      idx1 = temp;
      
    }
  console.log(str)
  }
}

console.log(solution(['sun', 'bed', 'car'], 1))