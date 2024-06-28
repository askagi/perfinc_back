import "dotenv/config";

import cors from "cors";
import express from "express";
import { connect } from "./database/connect";
const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

connect().catch(console.dir);

app.listen(port, () => console.log(`Server running on port ${port} 🚀`));
