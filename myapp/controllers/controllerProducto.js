let productsJson = require('../database/products.json');
let productsJson = JSON.parse(fs.readFileSync('database/products.json', utf-8 )) 
const path = require ('path'); 
const fs = require ('fs'); 

productsJson == "" ? fs.writeFileSync(productsJson.push([])) : fs.readFileSync (path.resolve('database/products.json'))
let controller = { 
    home : (req,res,next) =>{ 
        res.send('producto'); 
    }, 
    creacionProductoView : (req,res,next) =>{
        res.render('agregarProducto');
    },
    stockProducto: (req,res,next)=>{
        let productoCreado =req.body;
        productsJson.push(productoCreado);
        fs.writeFileSync (__dirname + '/../database/products.json', JSON.stringify(productsJson));
        res.send('producto creado'); 
    },
    editarProductoView : (req,res,next)=> {
       let idUrl = req.params.id; 
       let proudctoEncontrado = productsJson.find(producto=>producto.id == idUrl); 
       proudctoEncontrado? res.render ('editarProducto', {producto : proudctoEncontrado}) : res.send ('el producto no existe');

    },
    subirProducto : (req,res,next) =>{
    let productomodificado = req.body; 
    let productoactualizado = productsJson.map(function (producto) {
if (producto.id == req.params.id){
    producto = productoModificado;
} return producto; 
     });
  
    fs.writeFileSync (__dirname + '/../database/products.json', JSON.stringify(productsActualizados));
        res.render ('editarProducto',{producto: productoModificado}); 
    },
eliminarProducto : (req,res,next) => {
    let idUrl = req.params.id; 
    let productoEliminado = productosJson.filter(producto=>producto.id == idUrl);
    fs.writeFileSync(__dirname + '/../database/products.json', JSON.stringify(productsJson));
    res.send('producto eliminado'); 
}
}
module.exports= controller; 