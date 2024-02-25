import * as express from "express";
import * as cors from "cors";
import connectDB from "./config/db";
import config from "./config";
import userRoute from "./modules/user/routes";

const app = express();

connectDB();

const configRepo = config();
const port = configRepo.app.port;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({ origin: configRepo.cors.origin, methods: configRepo.cors.methods })
);

app.use("/", userRoute);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
