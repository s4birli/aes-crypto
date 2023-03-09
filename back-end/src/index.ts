import express from "express";
import routes from "./routes";
import * as dotenv from "dotenv";
import config from "./config/default";

dotenv.config();
const port = config.port;

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
  );
  if (req.method == "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});
app.use(express.json());

app.listen(port, async () => {
  console.log(`Express is listening at http://localhost:${port}`);
  routes(app);
});
