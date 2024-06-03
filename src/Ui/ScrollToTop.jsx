import { useEffect, useState } from "react";
import { HiArrowNarrowUp } from "react-icons/hi";

export default function Scroll() {
  const [isVisible, setIsVisible] = useState(false);
    function handleScroll(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

		const toggleVisibility = () => {
			if (window.pageYOffset > 600) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};
		useEffect(() => {
			window.addEventListener("scroll", toggleVisibility);
			return () => window.removeEventListener("scroll", toggleVisibility);
		}, []);


    return (
			<>
				{isVisible && (
					<div className="scrollToTop" onClick={handleScroll}>
						<HiArrowNarrowUp />
					</div>
				)}
			</>
		);
}
