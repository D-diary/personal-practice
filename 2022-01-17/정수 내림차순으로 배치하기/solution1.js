// https://programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
    const arr = (n+"").split('');
    arr.sort(function(a,b){return b-a});    
    var answer = Number(arr.toString().replace(/\,/g,''));
    return answer;
}

console.log(solution(118372))