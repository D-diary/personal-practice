// https://programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
  const str = (n).toString();
  const arr = [...str]
  const reverseArr = arr.reverse()

  console.log('str :', str)
  console.log('arr :', arr)
  console.log('reverseArr :', reverseArr)
  
  const int = [];
  for (let i = 0; i < reverseArr.length; i++) {
    let r = Number(reverseArr[i])
    int.push(r)
    console.log(int)
  }
  console.log('int :', int)

  return int
}

console.log(solution(12345)) // [5,4,3,2,1]
