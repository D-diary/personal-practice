// https://programmers.co.kr/learn/courses/30/lessons/12944


function solution(arr) {
    let add = 0
    let len = arr.length
    let answer = 0;
    for (let i = 0; i < arr.length; i++) {
      add += arr[i]
      console.log(add)
    }
    answer = add / len
    
    return answer;
}

solution([1,2,3,4])