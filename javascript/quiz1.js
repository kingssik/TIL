let numbers = [273,25,75,52,103,32,57,24,76]

// 홀수만 추출
numbers = numbers.filter((value) => value % 2 !== 0)
console.log('홀수만')
console.log(numbers)

// 100 이하 수만 추출
numbers = numbers.filter((value) => value <= 100)
console.log('100 이하 수만')
console.log(numbers)

// 5로 나눈 나머지가 0인 수만 추출
numbers = numbers.filter((value) => value % 5 === 0)
console.log('5로 나눈 나머지가 0인 수만')
console.log(numbers)