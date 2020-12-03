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
/* const aux =productDetails('Alcool gel', 'Máscara')
const firtsID = aux[0].details.productId.slice(-3)
const secondID = aux[1].details.productId.slice(-3)
//console.log(firtsID,secondID)
if(firtsID==secondID){console.log(true)}
else console.log(false)

//console.log(aux)  */


module.exports = productDetails;
