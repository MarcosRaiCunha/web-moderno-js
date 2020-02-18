const pessoa = {
  nome: 'rebeca',
  idade: 2,
  peso: 3
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(e => {
  console.log(`${e[0]}: ${e[1]}`);
});

Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true,
  writable: false,
  value: '01/01/2019'
})
pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

const dest = { a: 1 }
const ob1 = { b: 2 }
const ob2 = { c: 3, a: 4 }
const obj = Object.assign(dest, ob1, ob2)

Object.freeze(obj)
obj.c = 1234
console.log(obj);

console.log();
