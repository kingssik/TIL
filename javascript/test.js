// private 메서드
class Square {
  #test () {
    console.log('private 메서드임')
  }
  
  constructor () {
    this.#test()
  }
}

const square = new Square()
// square.#test() // 오류 발생