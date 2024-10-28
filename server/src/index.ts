//PWD: Dcsd228127!
//Username: cooperkier

import express, {Express} from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records"
import cors from "cors"; 

const MONGODB_KEY = "mongodb+srv://cooperkier:Dcsd228127!@personalfinance.tdsjuvd.mongodb.net/";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors())

const mongoURI: string = MONGODB_KEY;

mongoose
    .connect(mongoURI)
    .then(() => console.log("Connect To MongoDB"))
    .catch((error) => console.error("Failed To Connect To MongoDB"))

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
})
