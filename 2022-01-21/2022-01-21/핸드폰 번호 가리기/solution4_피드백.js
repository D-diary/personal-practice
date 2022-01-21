// https://programmers.co.kr/learn/courses/30/lessons/12948

// +=를 쓰면 왜 배열이 숫자열로 바뀌나요?
function solution(phone_number) {
  let p = [...phone_number];
  console.log(p); // [ '0', '1', '0', '3', '3', '3', '3', '4', '3', '2', '1' ]
  let list = [];

  for (let i = 0; i < p.length-4; i++) {
    list += p.splice(0,(p.length - 4),'*') // '0,1,0,3,3,3,3'
    list = p.splice(0,(p.length - 4),'*') // [ '0', '1', '0', '3', '3', '3', '3' ]
  }
}

console.log("-------------")
console.log(solution("01033334444")) // "*******4444"
// console.log(solution("027778888")) // ""*****8888"
console.log("-------------")


// console.log(p.indexOf(p[i])) // p.length - 4 확인용