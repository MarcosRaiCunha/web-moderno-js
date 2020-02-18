Array.prototype.filter2 = function (callback) {
  const newArray = []
  for (let index = 0; index < this.length; index++) {
    if (callback(this[index], index, this)) {
      newArray.push(this[index])
    }
  }
  return newArray
}

const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPad Pro', preco: 4199, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
  { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
]

const produtoCaro = produto => produto.preco > 500
const fragil = produto => produto.fragil
const resultado = produtos.filter2(produtoCaro).filter2(fragil)
console.log(resultado);
