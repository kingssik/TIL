// JSON 객체
const object = {
  color: "green",
  message: "hello!"
}
console.log(JSON.stringify(object))
// 출력 : {"color":"green","message":"hello!"}

const string = JSON.stringify(object)
console.log(JSON.parse(string))
// 출력 : { color: 'green', message: 'hello!' }

const other = JSON.parse(string)
console.log(other.color)    // green
console.log(other.message)  // hello!