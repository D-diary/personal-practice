var s = "pPoooyY"
var s2 = "Pyy"
var list
var arr
var countp
var county

function solution(s){
    list = s.toLowerCase();
    console.log('list : ', list)
    arr = Array.from(list)
    console.log(arr)
    countp = arr.filter(element => `${arr[0]}` === element).length
    console.log(countp)
    county = arr.filter(element => `${arr[arr.length -1]}` === element).length
    console.log(county)
    if (countp === county) {
      return true
    }
    else {
      return false
    }

}

console.log(solution(s))