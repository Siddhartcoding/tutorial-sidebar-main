import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext= createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({children})=>{
    const [isDarkMode, setDarkMode] = useState(true);

    const toggleTheme = ()=> {
     setDarkMode((prevState)=>!prevState);
    };
    const theme = isDarkMode? "dark": "light";
    useEffect (()=>{
    document.documentElement.setAttribute("data-theme",theme);
    },[isDarkMode]);
    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};