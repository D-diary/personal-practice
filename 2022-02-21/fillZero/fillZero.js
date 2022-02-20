// fillZero

// 빈 자릿수 만큼 0 채우기
function fillZero(n, w) {
  let str = String(n)
  let temp = '';

  for ( let i = 0; i < w - str.length; i++) {
    temp += '0';
  }
  
  temp += n;

  return temp;
}

console.log(fillZero(5, 4)); // 0005
console.log(fillZero(10, 4)); // 0010
console.log(fillZero(531, 4)); // 0531