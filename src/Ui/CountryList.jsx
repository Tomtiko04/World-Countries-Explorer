import { useEffect, useState } from "react";
import { useSearch } from "../context/useSearch";
import { useNavigate, useSearchParams } from "react-router-dom";
import CountryCard from "./CountryCard";

export default function CountryList() {
	
	const [countries, setCountries] = useState([]);
	const { state } = useSearch();
	
	const [searchParams] = useSearchParams();

	const filterValue = searchParams.get("region");

	const query = state.query;

	useEffect(function () {
		async function ListCountry() {
			try {
				const res = await fetch("https://restcountries.com/v3.1/all");
				const data = await res.json();
				const combinedData = data.flat(Infinity);
				setCountries(combinedData);
			} catch (error) {
				throw new Error(error.message);
			}
		}
		ListCountry();
	}, []);

	const navigate = useNavigate();

	const handleClick = (countryName) => {
		navigate(`/details/${countryName}`);
	};

	let filteredCountries = countries;

	if (filterValue === "all") filteredCountries = countries;
	if (filterValue === "africa")
		filteredCountries = countries.filter((country) => country.region === "Africa");
	if (filterValue === "americas")
		filteredCountries = countries.filter((country) => country.region === "Americas");
	if (filterValue === "asia")
		filteredCountries = countries.filter((country) => country.region === "Asia");
	if (filterValue === "europe")
		filteredCountries = countries.filter((country) => country.region === "Europe");
	if (filterValue === "oceania")
		filteredCountries = countries.filter((country) => country.region === "Oceania");
	if (query)
		filteredCountries = filteredCountries.filter((country) =>
			country.name.common.toLowerCase().includes(query.toLowerCase())
		);

	return (
		<div className="country-list-container">
			{/* {filteredCountries <= 0 && <div className="result-notFound">Country not on the list</div>} */}
			{filteredCountries?.map((country) => (
				<CountryCard key={country.cca3} country={country} handleClick={handleClick} />
			))}
		</div>
	);
}
