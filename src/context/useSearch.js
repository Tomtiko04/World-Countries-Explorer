import { useContext } from "react";
import { SearchContext } from "./SearchContext.jsx";

function useSearch(){
    const context = useContext(SearchContext);
    if(!context) throw new Error("Searchcontext was used outside of the SearchProvider");
    return context;
}

export {useSearch}
