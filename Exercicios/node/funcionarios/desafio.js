const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
const chineses = func => func.pais === 'China'
const chinesa = func => func.genero === 'F'
const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
  const funcionarios = response.data
  const func = funcionarios
    .filter(chineses)
    .filter(chinesa)
    .reduce(menorSalario)
  console.log(func);
})