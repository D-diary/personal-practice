// 배열 arr의 요소중 중복되는 값을 제거하시오.

function includes(result, c) {
    let flag = false;

    for (let j = 0; j < result.length; j++) {
        // 들어있는지 없는지 판단
        if (c === result[j]) {
            flag = true;
            break;
        }
    }

    if (!flag) {
        result.push(c);
    }
}

function solution(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        includes(result, arr[i]);
    }

    return result;
}


console.log(solution([1, 3, 2, 3, 1, 4, 2, 1, 3, 4, 5])); // [1, 3, 2, 4, 5]