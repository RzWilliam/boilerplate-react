import React, { useState, useEffect, useContext } from "react";
import { UrlContext } from "../context/UrlContext";
import Loader from "./Loader";
import Pikachu from "../assets/pikachu.png";

export default function DataFetch() {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const { url } = useContext(UrlContext);

    useEffect(() => {
        async function fetchData() {
            if (url.length > 0) {
                setIsLoading(true);
                try {
                    const response = await fetch(url);

                    if (!response.ok) {
                        throw new Error("No pokemon found");
                    }

                    const responseData = await response.json();

                    setData(responseData);
                    setIsLoading(false);
                    setError("");
                } catch (error) {
                    setError(error.message);
                    setIsLoading(false);
                }
            }
        }

        fetchData();
    }, [url]);

    return (
        <div>
            {isLoading && <Loader />}
            {!isLoading && error.length < 1 && data !== null && (
                <div className="flex flex-col gap-2 items-center">
                    <p className="font-bold">ID : {data.id}</p>
                    <img
                        className="w-32"
                        alt={data.name}
                        src={data.sprites.front_default}
                    />
                    <p className="capitalize font-bold">{data.name}</p>
                </div>
            )}
            {!isLoading && error.length > 1 && (
                <div className="flex flex-col gap-2 items-center">
                    <img src={Pikachu} className="w-32" alt="Pikachu Shocked" />
                    <p className="font-bold">{error}</p>
                </div>
            )}
        </div>
    );
}
