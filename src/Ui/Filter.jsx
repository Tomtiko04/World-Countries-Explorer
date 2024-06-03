import Searchbar from "./Searchbar";
import SelectOptions from "./SelectOptions";

export default function Filter() {
	return (
		<div className="container filter">
			<Searchbar />
			<SelectOptions
				filterField="region"
				options={[
					{ id: 1, value: "all", label: "Filter by Region" },
					{ id: 2, value: "africa", label: "Africa" },
					{ id: 3, value: "americas", label: "America" },
					{ id: 4, value: "asia", label: "Asia" },
					{ id: 5, value: "europe", label: "Europe" },
					{ id: 6, value: "oceania", label: "Oceania" },
				]}
			/>
		</div>
	);
}
