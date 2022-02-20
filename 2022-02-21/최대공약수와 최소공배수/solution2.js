function minimum(n, m) {
  const answer = [];
  const min = Math.min(n, m);
  let temp = 0;
  
  for ( let i = 1; i <= min; i++ ) {
    if ( n % i === 0 && m % i === 0 ) {
      temp = i;
    }
  }
  answer.push(temp);
  return Number(answer);
}

function maximum(n, m) {
  const answer = [];

  for ( let i = 1; i < 100; i++) {
    if ( i % n === 0 && i % m === 0 ) {
      answer.push(i)
      break;
    }
  }
  
  return Number(answer);
}

function solution(n, m) {
  const min = minimum(n, m);
  const max = maximum(n, m);
  
  return [min, max];
}

console.log(solution(3, 12)); // [3, 12]
console.log(solution(2, 5)); // [1, 10]