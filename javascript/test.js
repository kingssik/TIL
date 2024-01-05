// 배열
const arr = [100, 20, 'String', true, function () {}, () => {}]
console.log(arr[0])
console.log(arr[1])
arr[1] = 300
console.log(arr[1])

// 객체
const object = {
  name: 'hong',
  age: 7
}
console.log(object.name)
object.name = 'king'  // 객체 내부 변수의 값 변경
console.log(object.age)
object.age = 10       // 객체 내부 변수의 값 변경
console.log(object.age)

// 속성과 메서드
const dog = {
  name: 'jim',
  age: 3,
  bark: function () {
    console.log(`${dog.name} 짖는다`)
  },
  sleep: () => {
    console.log(`${dog.name} 잔다`)
  }
}
dog.bark()
dog.sleep()