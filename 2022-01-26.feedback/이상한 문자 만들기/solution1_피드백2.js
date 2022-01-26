// https://programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
    const arr = [];
    let word = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            // console.log('word>', word);
            arr.push(word);
            word = '';
            continue;
        }

        // console.log(s[i]);
        word += s[i];
    }


    // console.log('word>', word);
    if (word.length > 0) {
        arr.push(word);
    }
    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        const word = arr[i].split('');
        for (let j = 0; j < word.length; j++) {
           if (j % 2 === 0) {
               word[j] = word[j].toUpperCase();
           } else {
               word[j] = word[j].toLowerCase();
           }
        }
        // console.log(word.join(''));
        arr[i] = word.join('');
    }

    console.log(arr.join(' '));
}

console.log(solution("try hello world"));
// console.log(solution("trya bchello world"))

// 9번줄 idx = -1; 말고 다른 방법으로 초기화 할 수 있는지