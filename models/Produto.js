const mongoose =  require('mongoose');

const produtoSchema = mongoose.Schema({
    nome: String,
    preco: Number,
    tamanho: String,
    tipo: String
})

const Produto = mongoose.mode('Produto', produtoSchema)

module.exports = Produto
