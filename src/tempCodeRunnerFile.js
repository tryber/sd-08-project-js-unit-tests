function quantityOfZero(array) {
  let quantityOfZero = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === 0) {
      quantityOfZero += 1;
    }
  }
  if (quantityOfZero === (array.length - 1)) {
    return 0
  }
}


const average = (array) => {
  let sum = 0;
  
  if (array.length === 0 || array.length === 1) {
    return undefined
  }

  for (let index = 0; index < array.length; index += 1) {
    if (typeof (array[index]) !== 'number') {
      return undefined
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    sum += array[index]
  }

  quantityOfZero(array)

  return Math.round(sum / array.length)


};
console.log(average([' ']))