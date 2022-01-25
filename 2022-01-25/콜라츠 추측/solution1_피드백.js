// https://programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
  let i = 0; // 작업 반복횟수 저장용

  while (num !== 1) { // 1이 될때까지 실행할 반복문
      console.log('log 1');
      if (num % 2 === 0) { // 짝수라면
          num = num / 2; // 2를 나눈다
      } else if (num % 2 !== 0) { // 홀수라면
          num = (num * 3) + 1; // 3을 곱하고 1을 더한다
      }

      console.log('log 2');
      i = i + 1; // 한번 실행할때마다 반복횟수에 1을 더한다
      if (i > 500) { // 반복횟수 i가 500번 반복되면
          return -1 // 1을 반환한다
      }

      console.log('log 3');
    }
    return i   // 함수의 리턴값으로 반복횟수 i를 반환한다.
}

console.log(solution(6)) //