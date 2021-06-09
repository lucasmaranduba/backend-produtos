const express = require('express');
const produtoscontrollers = require('../controllers/produtoscontrollers.js');
const router = express.Router();
 
router.post('/produtos', produtoscontrollers.Insert);
router.get('/produtos', produtoscontrollers.SelectAll);
router.get('/produtos/:id', produtoscontrollers.SelectDetail);
router.put('/produtos/:id', produtoscontrollers.Update);
router.delete('/produtos/:id', produtoscontrollers.Delete);
 
module.exports = router;