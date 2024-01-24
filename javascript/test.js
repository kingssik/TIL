class Square {
  // static 속성
  static count = 0
  
  // static 메서드
  static test () {

  }

  constructor (length) {
    Square.count++
  }
}

// 만들어진 Square 객체의 개수를 알고싶을 때
console.log(Square.count)  // 0
new Square()
new Square()
new Square()
console.log(Square.count)  // 3