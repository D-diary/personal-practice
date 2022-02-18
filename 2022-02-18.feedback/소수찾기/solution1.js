// https://programmers.co.kr/learn/courses/30/lessons/12921

// 에라토스테네스의 체

function solution(n) {
	const arr = [];  
  
  for(let i = 2; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if( i % j === 0 ) {
      	count = count + 1;
      	console.log('i',i, 'j', j, 'count', count)
    	}
    }
    if( count === 2 ) {
      arr.push(i);
    }

    // console.log('i',i , 'count', count)
  }
  console.log('arr',arr)
  return arr.length;
}

console.log(solution(10)) // 4
console.log(solution(5)); // 3