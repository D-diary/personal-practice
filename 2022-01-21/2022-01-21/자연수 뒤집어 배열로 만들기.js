var n = 12345
var str
var arr
var reverseArr

function solution(n) {
  // 숫자열을 문자열로 변환 스프레드 연산자는 문자열을 문자열 변환한다
  str = (n).toString();
  console.log('str :', str)
  arr = [...str]
  console.log('arr :', arr)
  reverseArr = arr.reverse()
  console.log('reverseArr :', reverseArr)
  
  var int = [];
  for (var i = 0; i < reverseArr.length; i++) {
    let r = parseInt(reverseArr[i])
    int.push(r)
    console.log(int)
  }
  console.log('int :', int)
  return int
  // 키 값에 따라 하나씩만 출력됨
  // var int = parseInt(reverseArr[])
  // console.log('int : ', int)
  
  // NaN 뜸
  // var number = Number(reverseArr);
  // console.log(typeof number)
  // console.log(number) 
  
  // 모든 특수문자 제거 정규표현식 인데 안됨 리플레이스 낫 어 펑션
  // var result = reverseArr.replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi,"");
  // console.log('replace :', )

//   console.log(result)
  // return result
}

console.log(solution(n))

// NaN 뜨는 이유
// n = 12345
// console.log('n :',typeof n)
// var str
// var arr
// var reverseArr

// function solution(n) {
//   str = n.toString()
//   console.log(str)
//   arr = [...str]
//   console.log(arr)
//   re = arr.reverse()
//   console.log(re)
//   result = Number(re)
//   console.log(result)
//   // var answer = Number(arr.reverse())
//   // return answer  
// }

// console.log(solution(n))