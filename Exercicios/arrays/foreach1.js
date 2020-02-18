const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, index) {
  console.log(`${index + 1}) ${nome}`);
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados)