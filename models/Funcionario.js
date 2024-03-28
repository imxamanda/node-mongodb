const mongoose =  require('mongoose');

const FuncionarioSchema = mongoose.Schema({
    nome: String,
    preco: Number,
    tamanho: String,
    tipo: String
})

const Funcionario = mongoose.model('TM_FILENAME_BASE', FuncionarioSchema)

module.exports = Funcionario
