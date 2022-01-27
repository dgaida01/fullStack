const mongoose=  require('mongoose');

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Frist Name is Required'],
        minlength:[true,"First name must be at least 2 characters"]
    },
    price:{
        type:Number,
        required:[true,"Product must have a valid price"],
        min:[0.01,'Price must be greater than zero']
    },
    description:{
        type:String,
        required:[true,'Description is Required'],
        minlength:[true,"Must be at least 2 characters"]
    },
})

const Product =  mongoose.model('Product',ProductSchema)

module.exports = Product;