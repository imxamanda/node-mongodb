const mongoose =  require('mongoose');

const ClienteSchema = mongoose.Schema({
    nome: String,
    preco: Number,
    tamanho: String,
    tipo: String
})

const Cliente = mongoose.model('TM_FILENAME_BASE', ClienteSchema)

module.exports = Cliente


