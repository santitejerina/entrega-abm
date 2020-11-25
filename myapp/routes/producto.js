var express = require('express');
var router = express.Router();
let controllerProducto = require('../controllers/controllerProducto')



router.get('/',function (req,res,next){ 
    res.send("hola")
});
 router.get('/agregarProducto', controllerProducto.creacionProductoView);
router.post('/agregarProducto', controllerProducto.stockProducto);

router.get('/editarProducto/:id', controllerProducto.editarProductoView);
router.post('/editarProducto/:id', controllerProducto.subirProducto);

router.post('/eliminarproducto/:id',controllerProducto.eliminarProducto);  

/* module.exports = router;  */ 
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('ruta');
});

module.exports = router;
