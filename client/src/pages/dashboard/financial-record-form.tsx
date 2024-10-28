import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useFinancialRecords } from "../../contexts/financial-record-context";

export const FinancialRecordFrom = () => {

    const [description, setDescription] = useState<string>("");
    const [amount, setAmount] = useState<string>("");
    const [catagory, setCataory] = useState<string>("");
    const [paymentMethod, setPaymentMethod] = useState<string>("");
    const {} = useFinancialRecords();
    const {addRecord} = useFinancialRecords();

    const {user} = useUser();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newRecord = {
            userId: user?.id ?? "",
            date: new Date(),
            description: description,
            amount: parseFloat(amount),
            catagory: catagory,
            paymentMethod: paymentMethod
        };

        addRecord(newRecord)
        setDescription("");
        setAmount("");
        setCataory("");
        setPaymentMethod("");
    }

    return( 
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label>Description:</label>
                    <input type="text" required className="input" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div className="form-field">
                    <label>Amount:</label>
                    <input type="number" required className="input" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                </div>
                <div className="form-field">
                    <label>Catagory:</label>
                    <select required className="input" value={catagory} onChange={(e) => setCataory(e.target.value)}>
                        <option value="">Select a Catagory</option>
                        <option value="Food">Food</option>
                        <option value="Rent">Salary</option>
                        <option value="Untilities">Utilities</option>
                        <option value="Salary">Salary</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-field">
                    <label>Payment Method:</label>
                    <select required className="input" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                        <option value="">Select a Payment Method</option>
                        <option value="Cash">Cash</option>
                        <option value="Card">Card</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <button type="submit" className="button">
                    Add Record
                </button>
            </form>
        </div> 
    );
}