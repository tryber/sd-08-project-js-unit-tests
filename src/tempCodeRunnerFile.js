const array = []

function checkEmptyArray(array) {
  if (array.length === 0 || array.length === 1) {
    return undefined
  }
}
console.log(checkEmptyArray(array))