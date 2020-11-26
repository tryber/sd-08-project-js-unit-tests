const average = (array) => {
  let sum = null;
  if (array.length > 0) {
    for (let index = 0; index < array.length; index += 1) {
      if (typeof array[index] !== 'number') {
        return undefined;
      } else {
        sum += array[index];
      }
    }
  }
  if (array.length === 0) {
    return undefined;
  }

  return Math.round(sum / array.length);
};

console.log(average([]));