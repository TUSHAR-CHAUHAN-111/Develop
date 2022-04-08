import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import postRouter from "./routes/posts.js";
import userRouter from "./routes/users.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

const app = express();

dotenv.config();

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

app.get("/",(req,res)=>{
  res.send("Hello Memories API");
})


app.use("/posts", postRouter);
app.use("/users", userRouter);

const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.CONNECT_URL, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running on port ${PORT}`))
  )
  .catch((err) => console.log(err));

// app.set("useFindAndModify", false);
