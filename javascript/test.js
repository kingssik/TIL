// 기본 매개변수 예시

// 올해가 윤년인지 알려주는 함수
const isLeapYear = function (year = new Date().getFullYear()) {
  // 기본 매개변수 사용 불가했던 과거의 javascript 방식 3가지
  /**
  year = typeof(year) === 'undefined' ? new Date().getFullYear() : year
  year = typeof(year) !== 'undefined' ? year : new Date().getFullYear() 
  year = year || new Date().getFullYear()
  */

  console.log(`year : ${year}`)
  return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)
}

console.log(isLeapYear())
// 자동으로 올해 연도가 매개변수 year에 들어감