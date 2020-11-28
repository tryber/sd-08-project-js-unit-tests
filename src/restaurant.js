const restaurant = {};

const orderFromMenu = (request) => {
  restaurant.consumption.push(request);
};

const pay = () => {
  let total = 0;
  const foodMenu = restaurant.fetchMenu().food;
  const drinkMenu = restaurant.fetchMenu().drink;
  const consumption = restaurant.consumption;
  for (let item = 0; item < consumption.length; item += 1) {
    if (Object.keys(foodMenu).includes(consumption[item])) {
      total += foodMenu[consumption[item]];
    } else {
      total += drinkMenu[consumption[item]];
    }
  }
  return parseFloat((total * 1.1).toFixed(2));
};

const createMenu = (obj) => {
  restaurant.fetchMenu = () => obj;
  restaurant.consumption = [];
  restaurant.order = orderFromMenu;
  restaurant.pay = pay;
  return restaurant;
};

module.exports = createMenu;
