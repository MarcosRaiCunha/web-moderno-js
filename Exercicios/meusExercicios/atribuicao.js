const a = {nome:"Pedro"}

const b = a

console.log('Valores iniciais');
console.log(a);
console.log(b);

b.nome = "Marcos"


console.log('Valores modificados');
console.log(a);
console.log(b);

let c = 3

let d = c

console.log('Valores iniciais');
console.log(c);
console.log(d);

d = 8
console.log('Valores modificados');
console.log(c);
console.log(d);