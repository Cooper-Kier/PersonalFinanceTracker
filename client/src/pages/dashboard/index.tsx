import { useUser } from "@clerk/clerk-react";
import { FinancialRecordFrom } from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";

export const Dashboard= () => {
    const { user } = useUser();
    return (
        <div className="dashboard-container">
            <h1> Welcome {user?.firstName}! Here Are Your Finances: </h1>
            <FinancialRecordFrom/> 
            <FinancialRecordList/>
        </div>
    );
}