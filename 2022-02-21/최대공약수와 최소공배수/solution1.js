// https://programmers.co.kr/learn/courses/30/lessons/12940

function solution(n, m) {
    const answer = [];
    const min = Math.min(n, m);
    let temp = 0;

    for (let i = 1; i <= min; i++) {
        if (n % i === 0 && m % i === 0) {
            temp = i;
        }
    }
    answer.push(temp);

    for (let i = 1; i < 100; i++) {
        if (i % n === 0 && i % m === 0) {
            answer.push(i);
            break;
        }
    }

    return answer;
}

console.log(solution(3, 12)); // [3, 12]
console.log(solution(2, 5)); // [1, 10]


//

// https://celltong.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-JavaScript-level-1-%EC%B5%9C%EB%8C%80%EA%B3%B5%EC%95%BD%EC%88%98%EC%99%80-%EC%B5%9C%EC%86%8C%EA%B3%B5%EB%B0%B0%EC%88%98 

// 유클리드 호제법

// https://velog.io/@pmk4236/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%B5%9C%EB%8C%80%EA%B3%B5%EC%95%BD%EC%88%98%EC%99%80-%EC%B5%9C%EC%86%8C%EA%B3%B5%EB%B0%B0%EC%88%98-Javascript