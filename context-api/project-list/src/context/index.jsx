import { createContext } from "react";
import { useState } from "react"

export const ListContext = createContext({})

export function ListProvider({children}) {
    const [list, setList] = useState([])
    const [inputValue, setInputValue] = useState('')

    return (
        <ListContext.Provider value={{list, setList, inputValue, setInputValue}}>
            {children}
        </ListContext.Provider>
    )
}