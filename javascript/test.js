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

// 콜백함수 예제
// 배열의 콜백함수를 사용하는 메서드

// 1. forEach() -> 배열의 요소를 콜백함수로 전달해서 반복하는 함수
const arr1 = [11,22,33,44,55,66]
arr1.forEach(function (value, index) {
  console.log(`${index + 1}번째 값 : ${value}`)
})

// 2. filter() -> 특정 기준으로 filtering 한 배열 리턴
let arr2 = [11,22,33,44,55,66]
arr2 = arr2.filter(function (value) {
  return value % 2 == 0 // 짝수인 수만 filtering
})
console.log(arr2)

// 3. map() -> 기존의 배열 요소를 기반으로 새로운 배열을 만들어서 리턴
let arr3 = [11,22,33,44,55,66]
arr3 = arr3.map(function (value) {
  return value + "##"
})
console.log(arr3)