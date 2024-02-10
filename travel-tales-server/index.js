import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import postRoutes from './routes/posts.js'

const app = express();

app.use('/posts',postRoutes);
app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({limit:"30mb",extended:true})); 
app.use(cors())

const CONNECTION_URL = process.env.MONGODB_ATLAS_CONNECTION_URL;
const PORT = process.env.port || 5000;
mongoose.connect(CONNECTION_URL)
.then(()=>app.listen(PORT,()=>{console.log(`server running on port-: ${PORT}` )}))
.catch((e)=>{console.log(`Error encounted: ${e.message}`)});