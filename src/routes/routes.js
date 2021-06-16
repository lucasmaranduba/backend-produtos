const express = require('express');
const produtoscontrollers = require('../controllers/produtoscontrollers.js');
const router = express.Router();
 
router.post('/produto', produtoscontrollers.Insert);
router.get('/produto', produtoscontrollers.SelectAll);
router.get('/produto/:id', produtoscontrollers.SelectDetail);
router.put('/produto/:id', produtoscontrollers.Update);
router.delete('/produto/:id', produtoscontrollers.Delete);
 
module.exports = router;