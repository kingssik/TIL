// 객체의 키와 값을 정적으로 생성
const pet = {
  name: 'king',
  age: 8
}

// 객체의 키와 값을 동적으로 생성
pet.color = 'grey'
console.log(pet)  // { name: 'king', age: 8, color: 'grey' }

// 객체의 키와 값을 동적으로 제거
delete pet.color
console.log(pet)  // { name: 'king', age: 8}