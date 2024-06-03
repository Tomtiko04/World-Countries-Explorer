import { IoMoonOutline } from "react-icons/io5";
import { useDarkMode } from "../context/useDarkMode.js";
import { useNavigate } from "react-router-dom";

export default function Header(){
	const {state, dispatch} = useDarkMode()
	const isDarkMode = state.isDarkMode;
	const navigate = useNavigate();
	return (
		<header className={`header ${!isDarkMode ? "light" : "dark"}`}>
			<nav>
				<div className="logo" onClick={()=> navigate("/home")}>
					<h1>Where in the world?</h1>
				</div>
				{!isDarkMode ? (
					<div className="theme-filter" onClick={() => dispatch({ type: "ENABLE_DARK_MODE" })}>
						<span>
							<IoMoonOutline />
						</span>
						<p>Light Mode</p>
					</div>
				) : (
					<div className="theme-filter" onClick={() => dispatch({ type: "DISABLE_DARK_MODE" })}>
						<span>
							<IoMoonOutline />
						</span>
						<p>Dark Mode</p>
					</div>
				)}
			</nav>
		</header>
	);
}
