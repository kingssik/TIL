// 객체 속성 일괄 추출
const test = function (object) {
  const {name, age, color, status} = { status: 'good', ...object} // 오른쪽의 객체의 속성을 추출해서 변수처럼 활용

  return `${name} : ${age} : ${color} : ${status}`
}

console.log(test({
  name: 'cheeze',
  age: 8,
  color: 'gold'
}))