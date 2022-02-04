// https://programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
  result = [];
  for( let i = 0; i < arr1.length; i++) {
    for( let j = 0; j < arr1[i].length; j++) {
      console.log(arr1[i][j])
      // result = arr1[i][j] + arr2[i][j]
      result[i][j] = arr1[i][j] + arr2[i][j]
      console.log('result',result)
    }
  }
}



console.log(solution([[1,2],[2,3]],[[3,4],[5,6]])) // return [[4,6],[7,9]]
console.log(solution([[1],[2]],[[3],[4]])) // return [[4],[6]]

// 선생님 힌트

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//       console.log(matrix[i][j]);
//   }
// }
// 연습코드

// function solution(arr1, arr2) {
//   const result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr1[i].length; j++) {
//       console.log('test',arr1[i][j]);
//     }
//   }
//   console.log(arr1)
//   console.log(arr2)
//   console.log(arr1.length)
//   console.log(arr1[0])
//   console.log(arr1[0].length)
//   console.log(arr1[0][0])
// }


// console.log(solution([[1,2],[2,3]],[[3,4],[5,6]]))