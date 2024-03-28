const express = require('express');
const ComandaController = require('../controllers/ComandaController');
const ProdutoController = require('../controllers/ProdutoController');
const Produto = require('../models/Produto');
const router = express.Router();

router.get('/', function(req, res){
    res.json({})
})
//Produtos
router.get('/produtos', (req, res) => ProdutoController.getAll(req, res))
router.post('/produtos', (req, res) => ProdutoController.create(req, res))
router.get('/produtos/:id', (req, res) => ProdutoController.get(req, res))
router.put('/produtos/:id', (req, res) => ProdutoController.update(req, res))
router.delete('/produtos/:id', (req, res) => ProdutoController.delete(req, res))

//Comandas
router.get('/comandas', (req, res) => ComandaController.getAll(req, res))
router.post('/comandas', (req, res) => ComandaController.create(req, res))
router.get('/comandas/:id', (req, res) => ComandaController.get(req, res))
router.put('/comandas/:id', (req, res) => ComandaController.update(req, res))
router.delete('/comandas/:id', (req, res) => ComandaController.delete(req, res))

module.exports = router
