function maiorValor(arrayHighestCount) {
  let topNumber = arrayHighestCount[0];
  for (let i of arrayHighestCount) {
    if (topNumber < i) {
      topNumber = i;
    }
  }
  return topNumber;
}
function repedir(topNumber, arrayHighestCount ){
  let cont = 0;
  for (let j of arrayHighestCount) {
    if (topNumber === j) {
      cont++;
    } 
  }
  return cont;
}
function highestCount(arrayHighestCount) {
  return repedir(maiorValor(arrayHighestCount), arrayHighestCount);
}
let numbers = [5, 9, 3, 19, 70, 8, 100, 100, 2, 35, 27];
console.log(highestCount(numbers));