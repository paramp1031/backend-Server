import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=> {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URL}/${process.env.DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host} `);    // console log this responce 
    } catch (error) {
        console.log("MONGODB connection error ", error);
        process.exit(1);            // read the process exit code in node 
    }
}

export default connectDB