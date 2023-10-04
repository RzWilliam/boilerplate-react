import React from "react";

export default function Pokemon(props) {
    return (
        <div className="flex flex-col gap-2 items-center">
            <p className="font-bold">ID : {props.data.id}</p>
            <img
                className="w-32"
                alt={props.data.name}
                src={props.data.sprites.front_default}
            />
            <p className="capitalize font-bold">{props.data.name}</p>
        </div>
    );
}
