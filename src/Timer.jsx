import { useEffect, useState } from "react";
import Container from "./Container";

export default function Timer() {
	const dataTime = new Date();

	const [data, setData] = useState({
		h: dataTime.getHours(),
		m: dataTime.getMinutes(),
		s: dataTime.getSeconds(),
	});

	useEffect(() => {
		const timer = setInterval(() => {
			const data = new Date();
			setData({
				h: data.getHours(),

				m: data.getMinutes(),
				s: data.getSeconds(),
			});
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	const scale = {
		Hour: 30,
		Minute: 6,
		Second: 6,
	};

	const title = {
		HOUR: "HOUR",
		MINUTES: "MINUTES",
		SECONDS: "SECONDS",
	};

	const colors = {
		first: "#dc2f2f",
		second: "#ffe700",
		third: "#42b883",
	};

	return (
		<div
			className="
            lg:flex 
            lg:gap-20
            "
		>
			<Container
				scale={scale.Hour}
				ampm={data.h}
				data={data.h > 12 ? data.h - 12 : "0" + data.h}
				title={title.HOUR}
				colors={colors.first}
			/>
			<Container
				scale={scale.Minute}
				data={data.m < 10 ? "0" + data.m : data.m}
				title={title.MINUTES}
				colors={colors.second}
			/>
			<Container
				scale={scale.Second}
				data={data.s < 10 ? "0" + data.s : data.s}
				title={title.SECONDS}
				colors={colors.third}
			/>
		</div>
	);
}
