class Rectangle {
  constructor (width, height) {
    this.width = width
    this.height = height
  }

  getArea () {return this.width * this.height}
  getPerimeter () {return 2 * (this.width + this.height)}
}

// 상속 : Rectangle(부모 클래스), Square(자식 클래스)
class Square extends Rectangle {
  constructor (width) {
    super(width, width) // 부모의 생성자로 자식의 생성자에서만 호출하면 됨
  }
}

const rect = new Rectangle(20, 10)
console.log(`넓이: ${rect.getArea()}`)
console.log(`둘레: ${rect.getPerimeter()}`)

const square = new Square(10)
console.log(`넓이: ${square.getArea()}`)
console.log(`둘레: ${square.getPerimeter()}`)