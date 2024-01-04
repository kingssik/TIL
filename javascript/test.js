// 타이머 함수
const a = setTimeout(function () {
  console.log('setTimeout 함수')
}, 1000)

const b = setInterval(function () {
  console.log('setInterval 함수')
}, 1000)

console.log(a, b)

// 타이머 제거 함수
clearTimeout(a)
clearInterval(b)

// 즉시 호출 함수
(function () {
  
})()

// 아래와 동일함
// const f = function () {}
// f()
// function () {} 대신 f를 썼을 뿐임

(() => {

})()