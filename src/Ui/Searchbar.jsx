import { IoSearch } from "react-icons/io5";
import { useDarkMode } from "../context/useDarkMode";
import { useSearch } from "../context/useSearch";

export default function Searchbar() {
	const { state, dispatch } = useSearch();
	const { state: DarkMode } = useDarkMode();
	const isDarkMode = DarkMode.isDarkMode;

	return (
		<form className={`search-form ${!isDarkMode ? "light" : "dark"}`}>
			<i>
				<IoSearch style={{ color: !isDarkMode ? "hsl(0, 0%, 52%)" : "hsl(0, 0%, 100%)" }} />
			</i>
			<input
				value={state.query}
				onChange={(e) => dispatch({ type: "setSearchQuery", payload: e.target.value })}
				placeholder="Search for a country..."
				type="text"
				className={`input ${!isDarkMode ? "input-light" : "input-dark"}`}
			/>
		</form>
	);
}
