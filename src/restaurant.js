const for1 = (consumption, food, index) => {
  let pay = 0;
  for (let i = 0; i < food.length; i += 1) {
    if (consumption[index] === food[i][0]) {
      pay += food[i][1];
    }
  }
  return pay;
};

const for2 = (consumption, drinks, index) => {
  let pay = 0;
  for (let j = 0; j < drinks.length; j += 1) {
    if (consumption[index] === drinks[j][0]) {
      pay += drinks[j][1];
    }
  }
  return pay;
};

const declarafor = (consumption, food, drink) => {
  let pay = 0;
  const cons = consumption;
  const foods = food;
  const drinks = drink;
  for (let index = 0; index < consumption.length; index += 1) {
    pay += for1(cons, foods, index);
    pay += for2(cons, drinks, index);
  }
  return 1.1 * pay;
};


const createMenu = (objectParameter) => {
  const result = {};
  result.fetchMenu = objectParameter;
  result.consumption = [];
  result.order = pedido => result.consumption.push(pedido);
  result.pay = () => {
    const food = Object.entries(result.fetchMenu.food);
    const drinks = Object.entries(result.fetchMenu.drink);
    const consumption = result.consumption;
    const payment = declarafor(consumption, food, drinks);
    return payment;
  }
  return result;
};

module.exports = createMenu;
