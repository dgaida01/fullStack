const express = require("express") //import express
const cors = require("cors")//importing cors (cross origin resource sharing) which allows us to share our api info with our react application on the front end

const app = express(); //initialize express
const port = 8000; //specify port in variable 


//need these two lines below to be able to read and extract the information received from post, put, and patch requests
app.use(express.json())
app.use(express.urlencoded({extended:true})) //be able to read form information
app.use(cors()) //have the app be able to use "cross-origin-resource-sharing" features





//connecting to our mongodb database using mongoose
require("./server/config/config")




//import the routes and pass the app object to the routes
require('./server/routes/ninja.routes')(app)


app.listen( port, () => console.log(`Listening on port: ${port}`) );