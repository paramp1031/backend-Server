// require('dotenv').config({path : './env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({path : './env'});



connectDB()

//First approach of connect Data base  in index file 
/*
import  Express  from "express";
const app = Express();

(async () => {
    try {
        await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.error("error: ", error);
            throw error;
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("error", error);
        throw error;
        
    }
})()*/