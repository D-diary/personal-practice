// https://programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
  let x = 0;
  
  while ( x*x < n ) {
    x++;
    console.log('x', x)
  }

  if( n === x * x ) {
    return ( x + 1 ) * ( x + 1 );
  } else {
    return -1
  }
}

console.log('soltuion',solution(121)) // 144
console.log('soltuion',solution(3)) // -1