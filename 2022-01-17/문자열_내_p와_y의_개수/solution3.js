function counter(arr, char) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (char === arr[i]) {
      count++
      console.log('count :', arr[i], count)
    }
  }
  return count
}

function solution(s){
  const list = s.toLowerCase() // 소문자로 변환
  const arr = Array.from(list) // 배열로 변환

  return counter(arr, 'p') === counter(arr, 'y')
}

console.log(solution("pPoooyY")) // true
console.log(solution("Pyy")) // false