import React from "react";
import "./Loader.scss";

export default function Loader() {
    return (
        <div className="flex flex-col items-center">
            <div className="pokemon"></div>
            <p className="font-bold">Loading ...</p>
        </div>
    );
}
