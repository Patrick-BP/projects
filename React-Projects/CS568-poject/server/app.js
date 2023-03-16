const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require('multer')
const path = require("path");
const userRouter = require("./routers/UserRouter");
const CommentsRouter = require("./routers/CommentsRouter");
const MoviesRouter = require("./routers/MoviesRouter");

const FavRouter = require("./routers/FavRouter");
const PlaylistRouter = require("./routers/PlaylistRouter");

const Response = require('./models/responseobj');
const authRouter = require('./routers/authRouter');

const app = express();



app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname,"/images")));
app.use("/videos", express.static(path.join(__dirname,"/videos"))); 

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const storagevid = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "videos");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});



app.use(authRouter);
app.use("/users", userRouter);
app.use("/movies", MoviesRouter);
app.use("/fav", FavRouter);
app.use("/playlist", PlaylistRouter);
app.use("/comments", CommentsRouter);

const upload = multer({ storage });
try{
  app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("photo has been uploaded");
});
}catch(e){
  res.status(400).json("photo failed");
}

const uploadvid = multer({ storage: storagevid });
try{
  app.post("/upload/vid", uploadvid.single("file"), (req, res) => {
  res.status(200).json("video has been uploaded");
});
}catch(e){
  res.status(400).json("video failed");
}


app.use((req, res, next) => {
  res.status(404).json(new Response(true, err.message, null));
});
app.use((err, req, res, next) => {
  res.status(500).json(new Response(true, err.message, null));
});

mongoose.connect("mongodb://127.0.0.1:27017/moviesDB").then(() => {
  app.listen(3001, () => console.log("listening on Port", 3001));
});
