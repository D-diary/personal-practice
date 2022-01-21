// https://programmers.co.kr/learn/courses/30/lessons/12944


function solution(arr) {
    let add = 0;
    for (let i = 0; i < arr.length; i++) {
      add += arr[i];
      console.log(add);
    }

    return add / arr.length;
}

solution([1,2,3,4])