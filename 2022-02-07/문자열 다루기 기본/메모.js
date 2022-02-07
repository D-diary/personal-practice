let a = 'a123b'
let b = ''
for (let i = 0; i < a.length; i++) {
  if ( !isNaN(a[i]) ) {
    b += Number(a[i])
  }
}
console.log('b',b)