// Arrow functions
const soma = (a, b) => a + b
console.log(soma(2, 3));

// Arrow function this
const lexcio1 = () => console.log(this === exports);
const lexcio2 = lexcio1.bind(this)
lexcio1()
lexcio2()

// parametro default
function log(texto = "Node") {
  console.log(texto);
}
log()
log('Sou mais forte')

// operador rest
function total(...numeros) {
  let total = 0
  numeros.forEach(n => total += n)
  return total
}
console.log(total(2,3,4,5));

