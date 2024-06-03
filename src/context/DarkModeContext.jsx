import PropTypes from "prop-types";
import { createContext, useReducer } from "react";

export const DarkModeContext = createContext();

const initialState = {
	isDarkMode: false,
};

function reducer(state, action) {
	switch (action.type) {
		case "ENABLE_DARK_MODE":
			return {
				...state,
				isDarkMode: true,
			};
		case "DISABLE_DARK_MODE":
			return {
				...state,
				isDarkMode: false,
			};
		case "TOGGLE_DARK_MODE":
			return {
				...state,
				isDarkMode: !state.isDarkMode,
			};
		default:
			throw new Error("Something went wrong");
	}
}

export default function DarkModeProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<DarkModeContext.Provider value={{ state, dispatch }}>{children}</DarkModeContext.Provider>
	);
}

DarkModeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
