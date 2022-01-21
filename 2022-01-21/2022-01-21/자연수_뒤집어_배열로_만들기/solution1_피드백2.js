// https://programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
  const str = (n).toString();
  const arr = [...str]
  arr.reverse()

  console.log('str :', str)
  console.log('arr :', arr)

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i])
  }

  return arr
}

console.log(solution(12345)) // [5,4,3,2,1]
