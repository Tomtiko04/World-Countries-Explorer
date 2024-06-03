import CountryList from "../Ui/CountryList";
import Filter from "../Ui/Filter";
import ScrollToTop from "../Ui/ScrollToTop";

export default function HomePage() {
	
	return (
		<>
			<section>
				<Filter />
				<CountryList />
				<ScrollToTop />
			</section>
		</>
	);
}
