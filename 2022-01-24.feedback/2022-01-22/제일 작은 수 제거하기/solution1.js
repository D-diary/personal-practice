// https://programmers.co.kr/learn/courses/30/lessons/12935

// 3점 제출실패
function solution(arg) {
    let temp = 10;
    let arr = [];
    let newArr = [];
    if (arg.length > 2) {
        for (let i = 0; i < arg.length; i++) {
            arr.push(arg[i])
            if (temp > arg[i]) {
                temp = arg[i]
            }
        }
        arr = String(arr)
        // temp = String(temp)
        arr = arr.replace(temp, '');
        for (let i = 0; i < arr.length; i++) {
            arr = arr.replace(',', '')

        }
        // arr.pop()
        for (let i = 0; i < arr.length; i++) {
            newArr[i] = Number(arr[i])
        }
        console.log('newarr', newArr)
        console.log('arr', arr)
        return newArr
    }


    if (arg.length <= 1) {
        return [-1]
    }
}

console.log(solution([4, 3, 2, 1])); // [4, 3, 2]
console.log(solution([10])); // [-1]