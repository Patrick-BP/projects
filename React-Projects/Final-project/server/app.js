const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const userRouter = require("./routers/UserRouter");
const CommentsRouter = require("./routers/MoviesRouter");
const MoviesRouter = require("./routers/MoviesRouter");
const Response = require('./models/responseobj');
const authRouter = require('./routers/authRouter');

const app = express();

app.use(cors());
app.use(express.json());

let expressFileupload = require("express-fileupload");
app.use(
  expressFileupload({
    limits: { fileSize: 50 * 1024 * 1024 },
    abortOnLimit: true,
  })
);

app.use(authRouter);
app.use("/users", userRouter);
app.use("/movies", MoviesRouter);
app.use("/comments", CommentsRouter);

app.use((req, res, next) => {
  res.status(404).json(new Response(true, err.message, null));
});
app.use((err, req, res, next) => {
  res.status(500).json(new Response(true, err.message, null));
});

mongoose.connect("mongodb://127.0.0.1:27017/moviesDB").then(() => {
  app.listen(3001, () => console.log("listening on Port", 3001));
});
