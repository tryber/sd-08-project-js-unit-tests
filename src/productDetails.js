/*
  Dadas duas strings que representam nomes de produtos,
  retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]
*/

const productDetails = (firstProduct, secondProduct) => [
  {
    name: firstProduct,
    details: {
      productId: `${firstProduct}123`,
    },
  },
  {
    name: secondProduct,
    details: {
      productId: `${secondProduct}123`,
    },
  },
];

module.exports = productDetails;

// const retorno = productDetails('Alcool gel', 'Máscara')
// let acessProductID0 = retorno[0].details.productId;
// let acessProductID1 = retorno[1].details.productId

// console.log(acessProductID0.substr(acessProductID0.length -3, 3))
// console.log(acessProductID1.substr(acessProductID1.length -3, 3))
