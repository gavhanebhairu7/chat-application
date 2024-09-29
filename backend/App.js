import { AuthRouter } from "./controller/authController.js";
import { UserRouter } from "./controller/userController.js";
import { verifyToken } from "./middlewares/jwtToken.js";
import app from "./server.js";
app.use("/api/v1/auth", AuthRouter);
app.use(verifyToken);
app.use("/api/v1/users", UserRouter);
//all the important routes here which requires authentication like message route
