// Armazenando uma função em uma variavel
const imprimirSoma = function (a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variavel

const soma = (a, b) => {
  return 2 + 3
}

console.log(soma(2, 3));


// retorno implícito

const subtracao = (a, b) => a - b
console.log(subtracao(2,3));

const imprimir2 = b => console.log(b);

imprimir2(2)
