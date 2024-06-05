import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useDarkMode } from "../context/useDarkMode";
import Loader from "./Loader";

export default function Details() {
	const [country, setCountry] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();
	const { countryName } = useParams();
	const { state: DarkMode } = useDarkMode();
	const isDarkMode = DarkMode.isDarkMode;

	// const name = countryName.replace(/ +/g, "")
	useEffect(
		function () {
			async function fetchCountryDetail() {
				try {
					const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
					if (!res.ok) throw new Error("Something went wrong ):");
					const data = await res.json();
					setCountry(data);
					setIsLoading(false);
				} catch (error) {
					throw new Error(error.message);
				}
			}
			fetchCountryDetail();
		},
		[countryName]
	);

	async function handleBorderClick(borderCode) {
		try {
			const res = await fetch(`https://restcountries.com/v3.1/alpha/${borderCode}`);
			if (!res.ok) throw new Error("Something went wrong ):");
			const data = await res.json();
			console.log(data);
			setCountry(data);
			navigate(`/details/${data[0].name.common}`);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<>
			<section>
				<div onClick={() => navigate(-1)} className={`back ${!isDarkMode ? "light" : "dark"}`}>
					<HiArrowNarrowLeft /> Back
				</div>
				{!country && <div>Country details not found on record</div>}
				{isLoading && <Loader />}
				{country.map((countryDetails) => (
					<>
						<div key={countryDetails?.cca3} className="details-container">
							<div className="details-flag">
								<img src={countryDetails?.flags?.png} alt={countryDetails?.name?.common} />
							</div>
							<div
								className={`${!isDarkMode ? "details-container-light" : "details-container-dark"}`}>
								<h1>{countryDetails?.name.common}</h1>
								<div className="country-details-info">
									<div>
										<p>
											<strong>Native Name: </strong>
											{Object.values(countryDetails?.name.nativeName)[0]?.common || "N/A"}
										</p>
										<p>
											<strong>Population: </strong>
											{countryDetails?.population.toLocaleString() || "N/A"}
										</p>
										<p>
											<strong>Region: </strong>
											{countryDetails?.region || "N/A"}
										</p>
										<p>
											<strong>Sub Region: </strong>
											{countryDetails?.subregion || "N/A"}
										</p>
										<p>
											<strong>Capital: </strong>
											{countryDetails?.capital.join(", ") || "N/A"}
										</p>
									</div>
									<div>
										<p>
											<strong>Top Level Domain: </strong>
											{countryDetails?.tld.join(", ")}
										</p>
										<p>
											<strong>Currencies: </strong>
											{countryDetails?.currencies
												? Object.values(countryDetails?.currencies)
														.map((currency) => `${currency.name} (${currency.symbol})`)
														.join(", ")
												: "N/A"}
										</p>
										<p>
											<strong>Languages: </strong>
											{countryDetails?.languages
												? Object.values(countryDetails?.languages).join(", ")
												: "N/A"}
										</p>
									</div>
								</div>
								<div className="border-countries">
									<p>
										<strong>Border Countries: </strong>
									</p>

									<ul className="bc-card">
										{countryDetails.borders
											? countryDetails.borders.map((border) => (
													<li
														className={`${!isDarkMode ? "light" : "dark"}`}
														key={border}
														onClick={() => handleBorderClick(border)}>
														{border}
													</li>
											))
											: "None"}
									</ul>
								</div>
							</div>
						</div>
					</>
				))}
				<div></div>
			</section>
		</>
	);
}