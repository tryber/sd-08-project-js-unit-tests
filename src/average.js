const average = (array) => {
  if (array.length === 0) {
    return undefined;
  }

  let sumArray = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (typeof (array[index]) === 'string') {
      return undefined;
    }
    sumArray += array[index];
  }
  const resultAverage = Math.round(sumArray / array.length);
  return resultAverage;
};

module.exports = average;
