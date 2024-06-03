import { useContext } from "react"
import { DarkModeContext } from "./DarkModeContext"

function useDarkMode() {
   const context = useContext(DarkModeContext);
    if(!context) throw new Error("Darkcontext was used outside of the DarkModeProvider");
    return context;
}

export {useDarkMode}


