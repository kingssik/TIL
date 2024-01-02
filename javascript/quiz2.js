const max = function (arr) {
  let output = arr[0]
  for (const i of arr) {
    if (i > output) {
      output = i
    }
  }
  return output
}

console.log(max([1,2,3,4]))