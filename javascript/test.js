class StudentList {
  constructor () {
    this.list = []
  }

  add (student) {
    this.list.push(student)
  }

  printTable () {
    let output = '이름\t총점\t평균\n'
    for (const student of this.list) {
      output += `${student.이름}\t${student.getSum()}점\t${student.getAvg()}점\n`
    }
    console.log(output)
  }
}

class Student {
  // 생성자 -> 클래스로 객체를 생성할 때 호출
  constructor (이름, {국어, 영어, 수학}) {
    // 속성 생성
    this.이름 = 이름
    this.국어 = 국어
    this.영어 = 영어
    this.수학 = 수학
  }

  // 메서드 생성
  getSum () {
    return this.국어 + this.영어 + this.수학
  }
  getAvg () {
    return this.getSum() / 3
  }
}

// 객체 생성
const students = new StudentList
students.add(new Student('king', {국어: 86, 영어: 98, 수학: 92})),
students.add(new Student('jane', {국어: 84, 영어: 96, 수학: 90})),
students.add(new Student('paul', {국어: 82, 영어: 94, 수학: 88})),
students.add(new Student('meta', {국어: 80, 영어: 92, 수학: 86}))

students.printTable()