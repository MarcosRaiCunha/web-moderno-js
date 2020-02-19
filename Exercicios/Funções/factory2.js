function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.20
  }
}

console.log(criarProduto('iPad', 1469.99));
console.log(criarProduto('Notebook', 2000.99));
