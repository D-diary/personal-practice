// https://programmers.co.kr/learn/courses/30/lessons/12934

// 

function solution(n) {
  for (let i = 0; i * i <= n; i++) {
    // console.log('i', i);
    if( n === i * i ) {
      return ( i + 1 ) * ( i + 1 );
    }
  }

  return -1;
}

console.log('soltuion',solution(121)) // 144
console.log('soltuion',solution(3)) // -1