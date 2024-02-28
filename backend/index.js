import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

//Middleware for parsing request body
app.use(express.json());


//Middleware for handling CORS POLICY
//Option 1: Allow All Origin with Default Of Cors(*)
app.use(cors());


app.get('/', (request, response) =>  {
    console.log(request)
    return response.status(234).send ('Welcome To MERN Stack Tutorial')
});
 
app.use('/books',booksRoute);

mongoose.connect(mongoDBURL)
.then(() => {
 console.log("App Connected To Database");
 app.listen(PORT, () => {
    console.log(`App Is Listenting To Port: ${PORT}`);
});
})
.catch((error) => {
    console.log(error);
});