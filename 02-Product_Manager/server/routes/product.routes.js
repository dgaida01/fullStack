const ProductController = require('../controllers/product.controller')


module.exports=(app)=>{
    console.log('looking for route');
    //add a product to the database
    app.post('/api/addProduct',ProductController.addProduct)
    //get all products from the database
    app.get('/api/Products',   ProductController.getProducts)
    //get one prodduct by ID
    app.get('/api/Products/:id',ProductController.getOneProduct)
    //update the product by ID
    app.put('/api/Products/:id',ProductController.updateProduct)
    //delete by an id
    app.delete('/api/Products/:id',ProductController.deleteProduct)
}