import { Express } from "express";
import routes from "./src/routes/routes";
import { Mongoose } from "mongoose";
import bodyParser from "body-parser";
import res from "express/lib/response";

const app = express();

//Initialize dotenv package
dotenv.config();

Mongoose.Promise = global.Promise 
Mongoose.connect(process.env.DATABASE_URI, OPTIONS {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/',(request, response) => {
    res.send('')
})