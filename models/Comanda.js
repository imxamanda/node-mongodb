const mongoose =  require('mongoose');

const ComandaSchema = mongoose.Schema({
    nome: String,
    preco: Number,
    tamanho: String,
    tipo: String
})

const Comanda = mongoose.model('TM_FILENAME_BASE', ComandaSchema)

module.exports = Comanda
