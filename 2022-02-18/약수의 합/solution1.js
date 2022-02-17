// https://programmers.co.kr/learn/courses/30/lessons/12928

// 정수 n을 입력 받아 n의 약수를 모두 더한 값을 리턴하는 함수를 완성

// 제한 사항 n은 0이상 3000이하인 정수

// 입출력 n = 12 // return 28
//        n = 5 // return 6

// 입출력 예 설명
// 12의 약수는 1, 2, 3, 4, 6, 12입니다. 모두 더하면 28
// 5의 약수는 1, 5입니다. 모두 더하면 6

// 빈값 answer와 index를 초기화 해준다.
// index값이 n값보다 작거나 같을때까지 while문 반복
// n값과 index값의 나머지가 0이면 answer에 index값을 더해준다.
// index값을 1씩 더해준다
// 1부터 n값까지 하나씩 계산해주며 나머지가 0인값( 딱 나누어 떨어지는 값 = 약수)를 answer에 더해주게 됨

function solution(n) {
  let answer = 0;
  let index = 1;
  
  while ( index <= n ) {
      if( n % index === 0 ) {
          answer += index;
      }
      index += 1;
  }
  
  return answer;
}

console.log(solution(12)); // 28
console.log(solution(5)); // 6