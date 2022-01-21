// https://programmers.co.kr/learn/courses/30/lessons/12948

// replace가 첫번째 만난 값만 *로 교체
function solution(phone_number) {
  let p = phone_number;
  for (let i = 0; i < p.length - 4; i++) {
    star = p.replace(p[i],'*');
    console.log(star);
  }
}


console.log(solution("01033334444")); // "*******4444"
console.log(solution("027778888")); // ""*****8888"


// console.log(p.indexOf(p[i])) // p.length - 4 확인용