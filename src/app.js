
import Express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
// import logger from "./LogTest/indexlog.js";

const app = Express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true,
  })
);
app.use(Express.json({ limit: "20kb" })); //size of the json form
app.use(Express.urlencoded({ extended: true, limit: "20kb" })); // encode the url and extended means take object inside the object it is optional
app.use(Express.static("public"));
app.use(cookieParser());

//routes  import 

import userRouter from "./routes/user.router.js";
import videoRouter from "./routes/video.router.js"

//router declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/video", videoRouter);

// http://localhost:8001/api/v1/users/register

export { app };