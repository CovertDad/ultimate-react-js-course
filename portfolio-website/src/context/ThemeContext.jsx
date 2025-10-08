import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('darkMode')
        return savedTheme ? JSON.parse(savedTheme) : false
    })

    useEffect(() => {
        const root = document.documentElement
        
        darkMode ? root.classList.add('dark') : root.classList.remove('dark')
        localStorage.setItem('darkMode', JSON.stringify(darkMode))
    }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (<ThemeContext.Provider value={{ darkMode, toggleDarkMode }}> {children}</ThemeContext.Provider >)
}

export const useTheme = () => useContext(ThemeContext)