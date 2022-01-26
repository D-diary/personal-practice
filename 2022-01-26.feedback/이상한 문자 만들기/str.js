const str = 'hello';

console.log(str[0]); // 'h'
str[0] = 'z';
console.log(str[0]); // 'z' 아니고 'h'


const str2 = 'hello'.split('');
console.log('str2[0]', str2[0]); // 'h'
str2[0] = 'z';
console.log('str2[0]', str2[0]); // 'z'
