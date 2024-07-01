import "dotenv/config";

import cors from "cors";
import express from "express";
import { connect } from "./database/connect";
import { routers } from "./router/router";
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(routers);

connect().then(() =>
  app.listen(port, () => console.log(`Server running on port ${port} 🚀`))
);
