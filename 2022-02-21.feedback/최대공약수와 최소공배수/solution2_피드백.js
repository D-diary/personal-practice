function minimum(n, m) {
  const min = Math.min(n, m);
  let result = 0;
  
  for ( let i = 1; i <= min; i++ ) {
    if ( n % i === 0 && m % i === 0 ) {
      result = i;
    }
  }

  return result;
}

function maximum(n, m) {
  let result = 0;

  for ( let i = 1; i < n * m; i++) {
    if ( i % n === 0 && i % m === 0 ) {
      result = i;
      break;
    }
  }
  
  return result;
}

function solution(n, m) {
  const min = minimum(n, m);
  const max = maximum(n, m);
  
  return [min, max];
}

console.log(solution(3, 12)); // [3, 12]
console.log(solution(2, 5)); // [1, 10]