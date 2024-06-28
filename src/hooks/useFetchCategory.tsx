import axios from "axios";
import { useEffect, useState } from "react";

const useFetchCategory = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const getCategory = async () => {
            const response = await axios.get(
                "http://localhost:8080/api/category"
            );

            setCategory(response.data);
        };

        getCategory();
    }, []);
    return category;
};
export default useFetchCategory;
