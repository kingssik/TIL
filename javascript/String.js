// String 객체의 메서드
// 1. trim() : 문자열 양쪽 끝 공백 제거
console.log('     hello      '.trim())  // "hello"
console.log(`

hello

`.trim())  // "hello"

// 2. split() : 문자열을 특정 기호로 분할
console.log('24.01.06,king,pizza,30000'.split(',')) // ['24.01.06', 'king', 'pizza', '30000']
console.log('24.01.06 king pizza 30000'.split(' ')) // ['24.01.06', 'king', 'pizza', '30000']