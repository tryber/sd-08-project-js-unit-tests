const restaurant = {};

const orderFromMenu = (request) => {
  restaurant.consumption.push(request);
};

function payFromMenu() {
  let sumItens = 0;
  let sumFood = 0;
  let sumDrink = 0;
  const billItens = restaurant.consumption;

  for (let index = 0; index < billItens.length; index += 1) {
    if (restaurant.fetchMenu.food[billItens[index]]) {
      sumFood += restaurant.fetchMenu.food[billItens[index]];
    } else if (restaurant.fetchMenu.drink[billItens[index]]) {
      sumDrink += restaurant.fetchMenu.drink[billItens[index]];
    }
  }
  sumItens = sumFood + sumDrink;
  return (sumItens * 1.1).toFixed(2);
}

const createMenu = (myMenu) => {
  restaurant.fetchMenu = myMenu;
  restaurant.consumption = [];
  restaurant.order = orderFromMenu;
  restaurant.pay = payFromMenu;
  return restaurant;
};

module.exports = createMenu;
