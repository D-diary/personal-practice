// https://programmers.co.kr/learn/courses/30/lessons/12930

function wordSplit(s) {
    let word = '';
    const arr = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            arr.push(word);
            word = '';
            continue;
        }

        word += s[i];
    }

    if (word.length > 0) {
        arr.push(word);
    }

    return arr;
}

function toUpperAndToLower(word) {
    word = word.split('');

    for (let i = 0; i < word.length; i++) {
        if (i % 2 === 0) {
            word[i] = word[i].toUpperCase();
        } else {
            word[i] = word[i].toLowerCase();
        }
    }

    return word.join('');
}

function solution(s) {
    const arr = wordSplit(s);

    for (let i = 0; i < arr.length; i++) {
        arr[i] = toUpperAndToLower(arr[i]);
    }

    return arr.join(' ');
}

console.log(solution("try hello world"));
console.log(solution("trya bchello world"));

// 9번줄 idx = -1; 말고 다른 방법으로 초기화 할 수 있는지