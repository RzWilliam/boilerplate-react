import React, {useState} from "react";

export const UrlContext = React.createContext({
    url: "",
});

export function UrlContextProvider(props) {
    const [url, setUrl] = useState('');

    return (
        <UrlContext.Provider
            value={{
                url,
                setUrl
            }}
        >
            {props.children}
        </UrlContext.Provider>
    );
}
