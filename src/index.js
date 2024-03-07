const express=require("express");
const bodyParser=require('body-parser');

const {PORT, SYNC_DB }=require("./config/serverconfig");
const ApiRoutes= require("./routes/index");
const db=require('./models/index');
// const {Airplane}=require('./models/index');
const {AirportService}=require("./services/index");

const setupAndStartServer= async ()=>{
    // create the express object
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',ApiRoutes);

    app.listen(PORT, async () =>{
        console.log(`Server started at ${PORT}`);

        if(process.env.SYNC_DB){               // Database synchronization is a heavy process, so we can not sync our database everytime.
        db.sequelize.sync({alter:true});        // Whenever we want o Sync our db we will add an environment variable "SYNC_DB=true" inside our '.env' file
        }
  
 
    });
}  

setupAndStartServer();