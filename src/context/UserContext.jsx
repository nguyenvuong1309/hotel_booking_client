// const { createContext } = require("react");

import axios from "axios";
import { createContext, useEffect, useState } from "react";



export const UserContext = createContext({});
export function UserContextProvider({ children }) {
    const [count, setCount] = useState(0)
    const [ready, setReady] = useState(false);
    useEffect(() => {
        if (!user) {
            axios.get('/profile'
                , {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + localStorage.getItem('user:token')
                    }
                },
            ).then(({ data }) => {
                setUser(data)
                setReady(true)
            })
        }
    }, [])
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{ user, setUser, ready, setReady }}>
            {children}
        </UserContext.Provider>
    )
}
