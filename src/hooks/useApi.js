import { useState } from "react";

export default (apiFunction) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const request = async (...args) => {
        setLoading(true);
        try {
            const result = await apiFunction(...args);
            setData(result.data);
            console.log(data)
        } catch(err) {
            setError(err.message || "Unexpected Error!");
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    return {
        data,
        error,
        loading,
        request,
    }
}