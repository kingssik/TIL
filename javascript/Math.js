// Math 객체의 속성과 메서드
console.log(Math.E)
console.log(Math.PI)

console.log(Math.floor(10.5)) // 10
console.log(Math.ceil(10.5))  // 11
console.log(Math.round(10.5)) // 11

console.log(Math.max(12,9,111)) // 111
console.log(Math.min(12,9,111)) // 9
console.log(Math.max(...[12,9,111])) // 111
console.log(Math.min(...[12,9,111])) // 9

console.log(Math.random())
// 0 부터 100 사이 임의의 정수
console.log(Math.floor(Math.random() * 100))