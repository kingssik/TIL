// 정사각형 클래스
class Square {
  // private 속성
  #length

  constructor (length) {
    this.#length = length
  }
  
  // getter, setter
  get area () {return this.#length * this.#length}
  get perimeter () {return 4 * this.#length}
  set length (length) {
    if (length < 0) {
      throw '길이는 0 이상으로 해라 ㅇㅋ?'
    }
    this.#length = length
  }
  get length () {return this.#length}
}

const square = new Square(10)
// getter 속성, setter 속성
console.log(square.area)
console.log(square.perimeter)

// getter 속성, setter 속성
console.log(square.length)
square.length = 20
console.log(square.length)