// fillZero

// 빈 자릿수 만큼 0 채우기
function fillZero(n, w) {
  let str = String(n);

  for (let i = str.length; i < w; i++) {
    str = '0' + str;
    // console.log('str', str);
  }
  
  return str;
}

console.log(fillZero(5, 4)); // 0005
// console.log(fillZero(10, 4)); // 0010
// console.log(fillZero(531, 4)); // 0531