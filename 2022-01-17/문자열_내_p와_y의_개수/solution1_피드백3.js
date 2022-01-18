function counter(arr, char) {
    return arr.filter(element => char === element).length
}

function solution(s){
    const list = s.toLowerCase() // 소문자로 변환
    const arr = Array.from(list) // 배열로 변환

    // console.log('list : ', list)
    // console.log('arr :', arr)

    return counter(arr, 'p') === counter(arr, 'y')
}

// 입출력 예 2가지 s와 s2 선언

console.log(solution("pPoooyY")) // true
console.log(solution("Pyy")) // false