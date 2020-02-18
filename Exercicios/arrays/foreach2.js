Array.prototype.forEach2 = function (callback) {
  for (let index = 0; index < this.length; index++) {
    callback(this[index], index, this)    
  }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function (nome, index) {
  console.log(`${index + 1}) ${nome}`);
})