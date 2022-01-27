const mongoose = require('mongoose'); // import  mongoose to talk to database
const db_name = "ninjas" // this will be the name of our database we are working wtih

mongoose.connect(`mongodb+srv://root:root@projects.zmgzz.mongodb.net/${db_name}?retryWrites=true&w=majority`, {  
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));