// 프로토타입을 활용한 속성과 메서드 추가
String.prototype.value = 10
String.prototype.contain =  function (다른문자열) {
  return this.indexOf(다른문자열) >= 0
}

const a = 'string'
// console.log(a.value)  // 출력 : 10
console.log(`a.contain('str'): ${a.contain('str')}`)