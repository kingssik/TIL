const dog = {
  name: 'king',
  age: 8,
  color: 'navy'
}
console.log(dog.status) // 객체 내부에 정의되지 않은 속성 출력 시 undefined

// 객체 내부에 정의되지 않은 속성에 값 할당 방법
// --- 과거 ---
dog.status = dog.status !== undefined ? dog.status : 'good' // 방법1
dog.status = dog.status ? dog.status : 'good' // 방법2
dog.status = dog.status || 'good' // 방법3

// --- 현대 ---
// 전개연산자로 객체 기본 매개변수 지정
// 방법1
const cat = {
  name: 'jack',
  age: 3,
  color: 'gold'
  , status: 'angry'
}

const newCat = {
  status: 'cute',
  ...cat  // 전개 연산자를 통해 cat 객체 내부에 존재하는 속성도 추가, 위치에 따라 결과가 달라짐
}
console.log(newCat) // cat 객체 내부에 status 속성의 값이 할당된 경우 status에 'angry'가 할당됨(더 나중에 나와서)

// 방법2 -> 가장 현대적
const test = function ({name, age, color, status = 'good'}) {
  return `${name} : ${age} : ${color} : ${status}`
}

console.log(test({
  name: 'cheeze',
  age: 8,
  color: 'gold'
}))