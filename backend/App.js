import { UserModel } from "./model/userModel.js";
import app from "./server.js";
app.get("/", (req, res) => {
  res.send("hello from server");
});

//define middleware for
//utilise different routers, controllers to perform crud on diff models
