const myCounter = () => {
  const myArray = [];
  for (let counter1 = 0; counter1 <= 3; counter1 += 1) {
    myArray.push(counter1);
    for (let counter2 = 2; counter2 <= 3; counter2 += 1) {
      myArray.push(counter2);
    }
  }
  return myArray;
};

module.exports = myCounter;
