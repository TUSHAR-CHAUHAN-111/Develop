import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import postRouter from "./routes/posts.js";
import cookieParser from "cookie-parser";
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(
  cors({
    origin: true,
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/posts", postRouter);
const CONNECT_URL =
  "mongodb+srv://tushar:123@cluster0.riwsm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 8000;

mongoose
  .connect(CONNECT_URL, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running on port ${PORT}`))
  )
  .catch((err) => console.log(err));

// app.set("useFindAndModify", false);
