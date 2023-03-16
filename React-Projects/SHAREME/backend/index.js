import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import {} from 'dotenv/config'
import postRoutes from './routes/posts.js'
const app = express()

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors())
const CONNECTION_URL = process.env.MONGODB;
const PORT = process.env.PORT || 5000;


app.use('/posts', postRoutes);


mongoose.set('strictQuery', true);
mongoose.connect(CONNECTION_URL)
.then(()=>app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`)))
.catch((error)=>console.log(error.message));
