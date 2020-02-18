Array.prototype.reduce2 = function (callback, valorInicial) {
  const indexInicial = valorInicial ? 0 : 1
  let acumulador = valorInicial || this[0]
  for (let index = indexInicial; index < this.length; index++) {
    acumulador = callback(acumulador, this[index], index, this)
  }
  return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma, 21));
