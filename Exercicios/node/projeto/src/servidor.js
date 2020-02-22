const porta = 3003

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded())

app.get('/produtos', (req, res, next) => {
  return res.send(bancoDeDados.getProdutos({ extended: true }))
})

app.get('/produtos/:id', (req, res) => {
  return res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res) => {
  const produto = bancoDeDados.salvarProduto({
    name: req.body.name,
    preco: req.body.preco
  })
  return res.send(produto)
})

app.put('/produtos/:id', (req, res) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    name: req.body.name,
    preco: req.body.preco
  })
  
  return res.send(produto)
})
app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}`);
})