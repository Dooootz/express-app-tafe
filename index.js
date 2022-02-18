// import necessary dependencies 
import express from 'express';
import { routes } from './src/routes/routes.js';
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import dotenv from 'dotenv';

// initialize express app
const app = express();
// instantiate PORT number
const PORT = 4001;

// Initialises dotenv package
dotenv.config();

// MongoDB Connection
mongoose.Promise = global.Promise; // deprecated
// connects to mongoDB - takes in 2 parameters 
// first parameter uses dotenv to pull safely pull sensitive data from the .env file
// second parameter is an object & not sure what it actually does?
mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


// allows us to pass request bodies as urlencoded & JSON 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// initializes routes on our express session
routes(app);

// GET request - takes 2 parameters 
// req & res - res.send("string message to the page")
app.get('/', (req, res) => {
    res.send(`Server running on http://localhost:${process.env.PORT}`);
    console.log(`Server running http://localhost:${process.env.PORT}`);
})

// listen on PORT 4001... then
// callback function will console log our URL
app.listen(PORT, () => {
    console.log(`ITS ALIVE!!! on http://localhost:${PORT}`)
})
