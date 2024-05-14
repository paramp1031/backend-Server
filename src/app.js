import  Express  from "express";
import cors from "cors"
import cookieParser from "cookie-parser";


const app = Express();

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    Credential : true
}))
app.use(Express.json({limit: "20kb"}))   //size of the json form 
app.use(Express.urlencoded({extended:true, limit: "20kb"}))  // encode the url and extended means take object inside the object it is optional 
app.use(Express.static("public"))
app.use(cookieParser())


export { app }