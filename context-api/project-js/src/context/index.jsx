import { createContext, useState } from "react";

export const NameContext = createContext({})

export function NameProvider({children}) {
    const [name, setName] = useState('José')

    return (
        <NameContext.Provider value={{name, setName}}>
            {children}
        </NameContext.Provider>
    )
}