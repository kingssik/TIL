// const max = function (...arr) {
//   let output = arr[0]
//   for (const i of arr) {
//     if (i > output) {
//       output = i
//     }
//   }
//   return output
// }


const max = function (first, ...arr) {
  if (Array.isArray(first)) {
    let output = first[0]
    for (const value of first) {
      if (output < value) {
        output = value
      }
    }
    return output
  } else {
    let output = first
    for (const value of arr) {
      if (output < value) {
        output = value
      }
    }
    return output
  }
}

console.log(max([1,2,3,4]))
console.log(max(1,2,3,4))