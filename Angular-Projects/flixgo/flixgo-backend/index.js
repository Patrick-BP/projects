const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require('multer');
const path = require("path");
require('dotenv').config();
const userRouter = require("./routers/UserRouter");
const usersRouter = require("./routers/usersRouter");
const CommentsRouter = require("./routers/CommentsRouter");
const MoviesRouter = require("./routers/MoviesRouter");
const MovieRouter = require("./routers/movieRouter");
const PlaylistRouter = require("./routers/PlaylistRouter");
const tvshowRouter = require('./routers/tvshowRouter');
const episodeRouter = require('./routers/episodeRouter')
const Response = require('./models/responseobj');
const authRouter = require('./routers/authRouter');
const auth = require('./services/authentication');
const checkRole =  require('./services/checkRole');
const openRouter = require('./routers/openRouter');
const RatingRouter = require('./routers/RantingRouter')


const app = express();



app.use(cors());
app.use(express.json());
app.use("/public", express.static(path.join(__dirname,"/public")));
 



app.use(authRouter);

app.use("/user",auth.authenticationToken, userRouter);
app.use("/users",auth.authenticationToken,checkRole.checkRole, usersRouter);  // admin only
app.use("/movie",auth.authenticationToken,checkRole.checkRole, MovieRouter);  //admin only
app.use("/tvshow",auth.authenticationToken,checkRole.checkRole, tvshowRouter);  //admin only
app.use("/episode",auth.authenticationToken,checkRole.checkRole, episodeRouter);  //admin only
app.use("/episodes",auth.authenticationToken, episodeRouter); 
app.use('/usr',openRouter);
app.use("/movies", MoviesRouter); //authoriized user
app.use("/tv-shows",tvshowRouter); //unauthoriized user
app.use("/tvshows",auth.authenticationToken,tvshowRouter); //authoriized user
app.use("/playlist",auth.authenticationToken, PlaylistRouter);
app.use("/comments",auth.authenticationToken, CommentsRouter);
app.use("/rating",auth.authenticationToken, RatingRouter);

const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.LOCALDB
app.use((req, res, next) => {
  res.status(404).json(new Response(true, err.message, null));
});
app.use((err, req, res, next) => {
  res.status(500).json(new Response(true, err.message, null));
});

mongoose.connect(MONGO_URL,{
  maxPoolSize: 50,
  wtimeoutMS: 2500,
  useNewUrlParser: true,
}).then(() => {
  app.listen(PORT, () => console.log("listening on Port", PORT));
});
