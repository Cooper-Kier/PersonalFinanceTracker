"use strict";
//PWD: Dcsd228127!
//Username: cooperkier
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const MONGODB_KEY = "mongodb+srv://cooperkier:Dcsd228127!@personalfinance.tdsjuvd.mongodb.net/";
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
app.use(express_1.default.json());
const mongoURI = MONGODB_KEY;
mongoose_1.default.connect(mongoURI).then(() => console.log("Connect To MongoDB")).catch((error) => console.error("Failed To Connect To MongoDB"));
