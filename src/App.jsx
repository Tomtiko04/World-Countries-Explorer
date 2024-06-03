import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./AppLayout";
import { useDarkMode } from "./context/useDarkMode";
import { useEffect } from "react";

function App() {
	const { state: DarkMode } = useDarkMode();
	const isDarkMode = DarkMode.isDarkMode;
	useEffect(() => {
		if (!isDarkMode) {
			document.body.style.backgroundColor = "hsl(0, 0%, 98%)";
		} else {
			document.body.style.backgroundColor = "hsl(207, 26%, 17%)";
		}
	}, [isDarkMode]);
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route index element={<Navigate replace to="home" />} />
					<Route element={<AppLayout />}>
						<Route path="home" element={<HomePage />} />
						<Route path="details/:countryName" element={<DetailsPage />} />
					</Route>
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
