const average = (arr) => {
  for (indice in arr)  {
    if (indice === 0 || isNaN(indice)){
      console.log("opa, não posso ser array")
    }
  }
};
average([3, 0, 5, "opa"])