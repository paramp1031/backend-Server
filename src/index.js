// require('dotenv').config({path : './env'})

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({ path: "./.env" }); // if we use import syntax then we should config this

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is runnig on port : ${process.env.PORT}`);
    });
    app.on("error", (error) => {
      console.error("error: ", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("Mongo DB connetion failed ", err);
  });

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
