// https://programmers.co.kr/learn/courses/30/lessons/12921

function isPrime(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count = count + 1;
        }
    }

    return count === 2;
}

// console.log(isPrime(7)); // 2

function solution(n) {
    const arr = [];

    for (let i = 2; i <= n; i++) { /// 백만번 - 2
        if (isPrime(i)) {
            arr.push(i);
        }
    }

    return arr.length;
}

console.log(solution(10)) // 4
console.log(solution(5)); // 3