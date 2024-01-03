const test1 = function (callback) {
  callback()
}

const func1 = function () {
  console.log('hi')
}

test1(func1)
// test(10) // 함수가 아닌 것을 매개변수로 전달 -> error 발생(a is not a function)

// 콜백함수에 매개변수가 있는 경우
const test2 = function (arr, callback) {
  for (const value of arr) {
    callback(value)
  }
}

const func2 = function (a) {
  console.log(`${a}`)
}

test2([11,22,33,44,55], func2)
/* 이렇게도 작성 가능
test2([11,22,33,44,55], function (a) {
  console.log(`${a}`)
})
*/