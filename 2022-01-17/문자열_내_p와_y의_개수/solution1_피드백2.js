function solution(s){
    const list = s.toLowerCase() // 소문자로 변환
    const arr = Array.from(list) // 배열로 변환
    const countp = arr.filter(element => 'p' === element).length // p개수 셈
    const county = arr.filter(element => 'y' === element).length // y개수 셈

    // console.log('list : ', list)
    // console.log('arr :', arr)
    // console.log('countp :', countp)
    // console.log('county :', county)

    return countp === county
}

// 입출력 예 2가지 s와 s2 선언

console.log(solution("pPoooyY")) // true
console.log(solution("Pyy")) // false