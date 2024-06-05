import { BallTriangle } from "react-loader-spinner";

export default function Loader() {
  return (
		<div className="loader">
			<BallTriangle
				height={100}
				width={100}
				radius={5}
				color="#000"
				ariaLabel="ball-triangle-loading"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
			/>
		</div>
	);
}
