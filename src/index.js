import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "/env", // if giving prob try "./.env"
});

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          .content {
            flex: 1;
            padding: 20px;
          }
          footer {
            text-align: center;
            color: #777;
            font-size: 14px;
            padding: 10px;
            background-color: #ddd;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
          }
        </style>
      </head>
      <body>
        <div class="content">
          <h1 style="color: #333; text-align: center;">Welcome to the Server!</h1>
          <p style="color: #555; font-size: 18px; line-height: 1.6;">
            <strong style="color: #d35400;">This server includes a total of <span style="color: #2980b9; font-weight: bold;">42 APIs</span>,</strong> each designed to serve distinct purposes and functionalities. These APIs cater to various aspects of the application, ensuring seamless integration and efficient performance across different modules. Whether it's <span style="color: #27ae60; font-weight: bold;">user authentication</span>, <span style="color: #8e44ad; font-weight: bold;">data retrieval</span>, or <span style="color: #c0392b; font-weight: bold;">complex business logic</span>, each API is meticulously crafted to deliver robust and reliable results. Together, they form the backbone of the system, enabling smooth communication between the frontend and backend while supporting a wide range of features and use cases.
          </p>
        </div>
        <footer>
          &copy; ${new Date().getFullYear()} Paramhans. All rights reserved.
        </footer>
      </body>
    </html>
  `);
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is listening on: ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log("MONGODB connection failed!!!: ", error));
