import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connection from "./db/connection.js";
const App = express();
App.use(express.json());
App.use(cors());
dotenv.config();
App.listen(process.env.PORT, () =>
  console.log("Server is listening on ", process.env.PORT)
);

export default App;
