import React, { useState, useEffect } from "react";

export default function DataFetch(props) {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            if (props.url.length > 0) {
                setIsLoading(true);
                try {
                    const response = await fetch(props.url);

                    if (!response.ok) {
                        throw new Error("Something went wrong");
                    }

                    const responseData = await response.json();

                    setData(responseData);
                    setIsLoading(false);
                } catch (error) {
                    setError(error.message);
                    setIsLoading(false);
                }
            }
        }

        fetchData();
    }, [props.url]);

    return (
        <div>
            {isLoading && <p>Loading ...</p>}
            {!isLoading && error.length < 1 && data !== null && (
                <ul>
                    {data.results.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
            {!isLoading && error.length > 1 && <p>{error}</p>}
        </div>
    );
}
