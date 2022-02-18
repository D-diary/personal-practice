function solution(n) {
  let arr = [];
  for(let i = 2; i <= n; i++) {
    let count = 0;
    for(let j = 1; j <= i; j++) {
      if( i % j === 0) {
        count++;
      }
      if( count > 2) {
        break;
      }
    }
    if( count === 2 ) {
      arr.push(i);
    }
  }
  return arr.length;
}

console.log(solution(10));