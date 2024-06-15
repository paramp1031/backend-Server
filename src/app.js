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
