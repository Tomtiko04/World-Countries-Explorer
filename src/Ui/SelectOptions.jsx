import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types"
import { useDarkMode } from "../context/useDarkMode";
export default function SelectOptions({ filterField, options }) {
	const [searchParams, setSearchParams] = useSearchParams();
	const {state: DarkMode} = useDarkMode();
	const isDarkMode = DarkMode.isDarkMode;

	function handleClick(value) {
		searchParams.set(filterField, value);
		setSearchParams(searchParams);
	}


	return (
		<div className="region-dropdown">
			<div>
				<select
					onChange={(e) => handleClick(e.target.value)}
					value={searchParams.get(filterField) || options[0].value}
					className={`${!isDarkMode ? "light" : "dark"}`}>
					{options.map((option) => (
						<option key={option.id} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}

SelectOptions.propTypes = {
	options: PropTypes.any,
	filterField: PropTypes.any,
};
