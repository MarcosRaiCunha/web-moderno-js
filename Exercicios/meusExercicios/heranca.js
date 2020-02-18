function user(nome, sobrenome, renda) {
  this.nome = nome
  this.sobrenome = sobrenome
  this.renda = renda
}

user.prototype.log = function () {
  console.log(this.nome, this.sobrenome, this.renda);
}
user.prototype.reajuste = function () {
  this.renda += 1000
}

const usuario = new user('Marcos', 'Cunha', 3000)
usuario.reajuste()
usuario.log()