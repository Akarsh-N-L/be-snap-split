import { Elysia } from "elysia";
import connectToMongo from "./utils/mongo";

const app = new Elysia();

connectToMongo();

app.listen(3000, async (): Promise<void> => {
  console.log("Server is running on port 3000");
});
