// https://programmers.co.kr/learn/courses/30/lessons/12948

// 첫번째 0 값 빼고 성공
function solution(phone_number) {
  let p = [...phone_number];
  let list = [];
  let list2 = [];
  for (let i = 0; i < p.length - 4; i++) {
    star = p.splice(0,1,'*');
    star2 = (star).toString();
    list.push(star2);
  }
  for (let i = 1; i < 5; i++) {
    list2.unshift(p[p.length-i]);
  }
  last = list.concat(list2);
  answer = last.join('');
  return answer;
}

console.log("-------------");
console.log(solution("01033334444")); // "*******4444"
console.log(solution("027778888")); // ""*****8888"
console.log("-------------");


// console.log(p.indexOf(p[i])) // p.length - 4 확인용