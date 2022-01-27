const Product = require('../models/product.model');

module.exports.addProduct = ((req,res)=>{    
    Product.create(req.body)
    .then(addedProduct=>{
        res.json({result:addedProduct});
    })
    .catch(err=>res.json({message:'controller error adding products',error:err}))

})

module.exports.getProducts =((req,res)=>{
    Product.find()
    .then(inventory=>{
        res.json({results:inventory});
    })
    .catch(err=>res.json({message:'controller error getting all products',error:err}))

})

module.exports.getOneProduct =((req,res)=>{
    Product.findOne({_id:req.params.id})
    .then(aProduct=>{
        res.json({results:aProduct});
    })
    .catch(err=>{res.json({message:'controller faild to find by ID',error:err})})
})

module.exports.updateProduct = ((req,res)=>{
    Product.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
    .then(changedProd=>{
       res.json({results:changedProd});
    })
    .catch(err=>{res.json({message:"controller faild to update",error:err})})
})

module.exports.deleteProduct = ((req,res)=>{
    Product.findOneAndDelete({_id:req.params.id})
    .then(delProd=>{
        res.json({results:delProd})
    })
    .catch(err=>{res.json({message:"controller faild to delete",error:err})})
})