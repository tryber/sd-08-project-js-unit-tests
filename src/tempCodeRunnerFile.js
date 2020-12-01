const createMenu = (objeto) => {
  const objeoret = {
    fetchMenu: objeto,
  };

  objeoret.consumption = [];
  return objeoret;
};

console.log(createMenu({ ze: 'vinte', cabelo: 'seila' }));

module.exports = createMenu;