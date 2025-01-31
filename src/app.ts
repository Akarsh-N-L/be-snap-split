import express from "express";
import morgan from "morgan";
import indexRouter from "./routes";
import connectToMongo from "./utils/mongo/mongo";

const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", indexRouter);

app.listen(port, async () => {
  await connectToMongo();
  console.log(`Server started at http://localhost:${port} 🚀 `);
});
