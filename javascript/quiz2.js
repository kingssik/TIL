const arr = ['apple', 'pear', 'mandarin', 'banana']

// forin 반복문을 forEach로
arr.forEach(function (value, index) {
  console.log(index)
})

// forof 반복문을 forEach로
arr.forEach((value, index) => {
  console.log(value)
})