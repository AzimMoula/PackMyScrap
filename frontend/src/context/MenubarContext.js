import { createContext, useState } from "react";

export const MenubarContext = createContext()

export const MenubarContextProvider = ({ children }) => {

    const [menu, setMenu] = useState(false)
    const toggleMenu = (menu) => {
        setMenu(!menu)
    }

    return (
        <MenubarContext.Provider value={{menu, setMenu, toggleMenu}}>
            { children }
        </MenubarContext.Provider>
    )
}