import express from "express";
import path from "path";
import {User} from "./User";

const PORT: number = 3000;

const staticDir = __dirname;

const app = express();
app.use(express.static(staticDir));

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});
