// https://programmers.co.kr/learn/courses/30/lessons/12915


function solution(strings, n) {
  const arr = strings;

  for (let i = 0; i < arr.length; i++) {
  	for (let j = i + 1; j < arr.length; j++) {
      if ( arr[i][n] > arr[j][n] ) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      
      if ( arr[i][n] == arr[j][n] ) {
        if ( arr[i] > arr[j] ) {
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }

      }
    }
  }
  return arr;
}


console.log(solution(['sun', 'bed', 'car'], 1)); // ["car", "bed", "sun"]
console.log(solution(["abce", "abcd", "cdx"], 2)); // ["abcd", "abce", "cdx"]

