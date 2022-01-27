//import the controller file and give it a variable name to reference
const NinjaController = require("../controllers/ninja.controller")



//these are your backend routes---AKA api endpoints
module.exports = (app)=>{
    app.get("/api/hello", NinjaController.sayHello)
    //more routes here

    //to get all of something
    app.get("/api/ninjas", NinjaController.findAllNinjas)


    //to create something new
    app.post("/api/ninjas", NinjaController.createNewNinja)

    //find a random ninja
    app.get("/api/ninjas/random", NinjaController.findRandomNinja)

    //get one of something
    app.get("/api/ninjas/:id", NinjaController.findOneNinja)

    //update one of something
    app.put("/api/ninjas/:id", NinjaController.updateNinja)
    
    //delete one of something
    app.delete("/api/ninjas/:id", NinjaController.deleteNinja)
    
    
    

}