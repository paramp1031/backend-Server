import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

const app = new express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(morgan("dev")); //HTTP request logger middleware for node.js

//routes import

import userRouter from "./routes/user.router.js";
import commentRouter from "./routes/comment.router.js";
import likeRouter from "./routes/like.router.js";
import subscriptionRouter from "./routes/subscription.router.js";
import tweetRouter from "./routes/tweet.router.js";
import videoRouter from "./routes/video.router.js";
import healthcheckRouter from "./routes/healthcheck.router.js";
import playlistRouter from "./routes/playlist.router.js";
import dashboardRouter from "./routes/dashboard.router.js";

//routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/comment", commentRouter);
app.use("/api/v1/likes", likeRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("/api/v1/tweet", tweetRouter);
app.use("/api/v1/video", videoRouter);
app.use("/api/v1/healthcheck", healthcheckRouter);
app.use("/api/v1/playlist", playlistRouter);
app.use("/api/v1/dashboard", dashboardRouter);

export default app;
