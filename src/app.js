
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

//router declaration
app.use("/api/v1/users", userRouter);

// http://localhost:8001/api/v1/users/register

/*
// log setup to debug 

app.use(Express.json());

app.get('/', (req, res) => {
  logger.debug('Entered home route');  // Log a debug message
  logger.info('Processing request for home route');  // Log an info message
  res.send('Home Page');
});

app.post('/login', (req, res) => {
  logger.debug('Entered login route');  // Log a debug message
  const username = req.body.username;
  logger.info(`Login attempt for user: ${username}`);  // Log an info message with user details
  res.send('Login Page');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);  // Log an info message when the server starts
});
*/
export { app };














/*


import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import
import userRouter from './routes/user.routes.js'
import healthcheckRouter from "./routes/healthcheck.routes.js"
import tweetRouter from "./routes/tweet.routes.js"
import subscriptionRouter from "./routes/subscription.routes.js"
import videoRouter from "./routes/video.routes.js"
import commentRouter from "./routes/comment.routes.js"
import likeRouter from "./routes/like.routes.js"
import playlistRouter from "./routes/playlist.routes.js"
import dashboardRouter from "./routes/dashboard.routes.js"

//routes declaration
app.use("/api/v1/healthcheck", healthcheckRouter)
app.use("/api/v1/users", userRouter)
app.use("/api/v1/tweets", tweetRouter)
app.use("/api/v1/subscriptions", subscriptionRouter)
app.use("/api/v1/videos", videoRouter)
app.use("/api/v1/comments", commentRouter)
app.use("/api/v1/likes", likeRouter)
app.use("/api/v1/playlist", playlistRouter)
app.use("/api/v1/dashboard", dashboardRouter)

// http://localhost:8000/api/v1/users/register

export { app }
*/