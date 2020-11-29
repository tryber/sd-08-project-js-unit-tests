const average = (arr = []) => {
  if (arr.length <= 0 || !arr) {
    return undefined;
  }
  const set = {
    sum: 0,
    size: arr.length,
  };
  for (let index = 0; index < arr.length; index += 1) {
    if (typeof arr[index] !== 'number') {
      return undefined;
    }
    set.sum += arr[index];
  }
  return Math.round(set.sum / set.size);
};

module.exports = average;
