import { Express } from "express";
import { routes } from "./src/routes/routes";
import { Mongoose } from "mongoose";
import bodyParser from "body-parser";
import res from "express/lib/response";

const app = express();


//Initialize dotenv package
const dotenv = require("dotenv")
dotenv.config();

//Establish +MongoDB connection
Mongoose.Promise = global.Promise 
Mongoose.connect(process.env.DATABASE_URI, OPTIONS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app);

app.get('/',(req, res) => {
    res.send(`server running on ${process.env.PORT}`)
})

app.listen(process.env.PORT, HOSTNAME = () => {
    console.log(`server is running on post ${process.env.PORT}`)
})