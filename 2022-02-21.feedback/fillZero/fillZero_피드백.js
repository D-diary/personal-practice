// fillZero

// 빈 자릿수 만큼 0 채우기
function fillZero(n, w) {
  const str = String(n);
  let result = '';

  for (let i = str.length; i < w; i++) {
    result += '0';
  }
  
  result += str;

  return result;
}

console.log(fillZero(5, 4)); // 0005
// console.log(fillZero(10, 4)); // 0010
// console.log(fillZero(531, 4)); // 0531