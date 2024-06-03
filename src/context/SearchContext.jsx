import PropTypes from "prop-types";

import { createContext, useReducer } from "react";

export const SearchContext = createContext();

const initialState = {
	query: "",
};

function reducer(state, action) {
	switch (action.type) {
		case "setSearchQuery":
			return {
				...state,
				query: action.payload,
			};
		default:
			throw new Error("Action unkonwn");
	}
}

export default function SearchProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	return <SearchContext.Provider value={{ state, dispatch }}>{children}</SearchContext.Provider>;
}

SearchProvider.propTypes = {
	children: PropTypes.any,
};
