const mongoose=  require('mongoose');
//********************************************************************** */
//update below as need for project chanig schema name , creation and export
//********************************************************************** */


const AuthorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is Required'],
        minlength:[3,"Name must be at least 3 characters"]
    },
    // quote:{
    //     type:[String],
    //     required:[true,"The Author must have someting to say"],
    //     minlength:[5,'quote must have 5 charaters']
    // }
    quote:{
        type:[{type:String, required:[true, 'The Author must have someting to say'] ,minlength:[5,'must be 5 char long']}],

    }
})

const Author =  mongoose.model('Author',AuthorSchema)

module.exports = Author;