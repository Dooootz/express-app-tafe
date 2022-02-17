import express from 'express';
import { routes } from './src/routes/routes.js';
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import dotenv from 'dotenv';

//
const app = express();
const PORT = 4001;

// Initialises dotenv package
dotenv.config();

// MongoDB Connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => {
    res.send('Server running on ' + process.env.PORT);
    console.log(`Server running on ${process.env.PORT}`);
})

app.listen(PORT, () => {
    console.log(`ITS ALIVE!!! on http://localhost:${PORT}`)
})
