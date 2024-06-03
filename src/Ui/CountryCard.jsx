import PropTypes from "prop-types";
import { useDarkMode } from "../context/useDarkMode";

export default function CountryCard({country, handleClick}) {
    const { state: DarkMode } = useDarkMode();
	const isDarkMode = DarkMode.isDarkMode;
  return (
		<div className={`country-item ${!isDarkMode ? "light" : "dark"}`} onClick={() => handleClick(country.name.common)}>
			<div className="card-img">
				<img src={country.flags.png} alt={country.name.common} />
			</div>
			<div className="card-details">
				<h4>{country.name.common}</h4>
				<p>
					<b>Population:</b> {country.population.toLocaleString()}
				</p>
				<p>
					<b>Region:</b> {country.region}
				</p>
				<p>
					<b>Capital:</b> {country.capital}
				</p>
			</div>
		</div>
	);
}

CountryCard.propTypes = {
    country: PropTypes.any,
    handleClick: PropTypes.func
}
