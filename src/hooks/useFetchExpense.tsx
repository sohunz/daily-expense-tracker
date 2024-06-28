import axios from "axios";
import { useEffect, useState } from "react";

const useFetchExpense = () => {
    const [expense, setExpense] = useState([]);

    useEffect(() => {
        const getExpenses = async () => {
            const response = await axios.get(
                "http://localhost:8080/api/expenses"
            );

            setExpense(response.data);
        };

        getExpenses();
    }, []);
    return expense;
};
export default useFetchExpense;
