import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import MenusRoutes from "./routes/MenusRoutes";

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(MenusRoutes);

app.listen(port, () => {
  console.log(port);
});
