 import mongoose from "mongoose";

 interface FinancialRecord {
    userId: string;
    date: Date;
    description: string;
    amount: number;
    catagory: string;
    paymentMethod: string;
 }

 const finanicalRecordSchema = new mongoose.Schema<FinancialRecord>({

    userId: {type: String, required: true},
    date: {type: Date, required: true},
    description: {type: String, required: true},
    amount: {type: Number, required: true},
    catagory: {type: String, required: true},
    paymentMethod: {type: String, required: true}

 });

 const FinancialRecordModel = mongoose.model<FinancialRecord>(
    "FinancialRecord",
    finanicalRecordSchema
 );

 export default FinancialRecordModel;