// https://programmers.co.kr/learn/courses/30/lessons/12917

// 메소드 없이 푸는 법

function solution(s) {
  let answer = '';
  // const arr = s.split('');
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    arr.push(s[i]);
  }
  // console.log(arr);

  // arr.sort().reverse();
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // console.log(arr[i], arr[j], arr[i] < arr[j]);
      // console.log(arr[i].charCodeAt(0), arr[j].charCodeAt(0), arr[i] < arr[j]);
      // console.log('가'.charCodeAt(0));

      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] =[arr[j], arr[i]];
      }
    }
  }
  // console.log(arr);
  
  // answer = arr.join('');
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }

  return answer;
}

console.log(solution('Zbcdefg')); // gfedcbZ
