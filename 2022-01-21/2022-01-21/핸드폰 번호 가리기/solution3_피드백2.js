// https://programmers.co.kr/learn/courses/30/lessons/12948

// 첫번째 0 값 빼고 성공
function solution(phone_number) {
  const p = [...phone_number];
  const list = [];
  const list2 = [];

  let star;
  let star2;
  let last;
  let answer;

  for (let i = 0; i < p.length - 4; i++) {
    // console.log('before p', p);
    p.splice(i,1,'*');
    // console.log('after p', p);
  }

  return p.join('');
}

console.log("-------------");
console.log(solution("01033334444")); // "*******4444"
console.log(solution("027778888")); // ""*****8888"
console.log("-------------");


// console.log(p.indexOf(p[i])) // p.length - 4 확인용

// 내가 다시 푼 과정
function solution(phone_number) {
  const p = String(phone_number)
  const pnum = []
  for (let i = 0; i < p.length; i++) {
    pnum.push(p[i])
  }
  console.log(pnum)
  for (let i = 0; i < p.length-4; i++) {
    pnum.splice(i,1,'*')
  }
  return pnum.join('');
}

console.log(solution("01033334444"))