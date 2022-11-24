import "dotenv/config";
import "reflect-metadata";
import "express-async-errors";
import express from "express";
import cors from "cors";
import handleAppErrorMiddleware from "./middlewares/handleAppError.middleware";
import PartnerRouter from "./routes/partner";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", PartnerRouter);

app.use(handleAppErrorMiddleware);

app.listen(process.env.PORT || 3000, () => {
  console.log("App running");
});

export default app;