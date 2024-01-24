// 정사각형 클래스
class Square {
  // private 속성
  #length

  constructor (length) {
    this.#length = length
  }
  getArea () {
    return this.#length * this.#length
  }
  getPerimeter () {
    return 4 * this.#length
  }
}

const square = new Square(10)
console.log(square.getArea())
console.log(square.getPerimeter())

// square.#length = -10 // 외부에서 접근 불가능
// SyntaxError: Private field '#length' must be declared in an enclosing class
// console.log(square.getArea())
// console.log(square.getPerimeter())