


// const { createContext } = require("react");

import axios from "axios";
import { createContext, useEffect, useState } from "react";



export const LanguageContext = createContext({});
export function LanguageContextProvider({ children }) {
    const [language, setLanguage] = useState("english")
    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}
