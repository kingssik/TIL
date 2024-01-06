// Number
// 1. toFixed() : 소수점 n번째 자릿수까지 출력
const a = 123.4567
console.log(a.toFixed(1)) // "123.5"
console.log(a.toFixed(3)) // "123.457"

// 2. isNaN() : 매개변수가 NaN 이라면 true, 아니면 false 출력
console.log(Number.isNaN(a))  // false
const b = Number('Stirng')
console.log(Number.isNaN(b))  // true

// 3. isFinite()
console.log(Number.isFinite(10)) // true
console.log(Number.isFinite(10.10)) // true

const inf = 10 / 0
console.log(typeof(inf))  // "number"
console.log(inf)  // Infinity
console.log(Number.isFinite(inf)) //false