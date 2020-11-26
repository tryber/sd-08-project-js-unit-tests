const array = [2.4, 2.7, 2.9];
const zez = [];
let zdzssd = 0;
for (let i = 0; i < array.length; i++) {
  zdzssd += Math.round(array[i]);

  /* zez.push(Math.round(array[i]));
  console.log(zez); */
}
let divisao = zdzssd / array.length;
console.log(divisao);
