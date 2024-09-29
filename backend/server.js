import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connection from "./db/connection.js";
import cookieParser from "cookie-parser";
const App = express();
App.use(express.json());
App.use(express.urlencoded({ extended: true }));
App.use(cors());
App.use(cookieParser());
dotenv.config();
App.listen(process.env.PORT, () =>
  console.log("Server is listening on ", process.env.PORT)
);

export default App;
