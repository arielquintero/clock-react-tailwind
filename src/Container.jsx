export default function Container({ scale, data, title, colors, ampm = null }) {
	const conic = {
		background: `conic-gradient(${colors} ${
			data * scale
		}deg, #ededed 0deg)`,
	};
	const content = {
		transform: `rotateZ(${data * scale}deg)`,
	};

	return (
		<section
			className="relative m-auto flex h-full w-72 flex-col items-center
            pb-4
            content-[''] 
            sm:my-10
            sm:p-10
            "
		>
			<div
				className="relative flex h-32 w-32 items-center justify-center
                    rounded-full
                    after:absolute
                    after:h-28
                    after:w-28
                    after:rounded-full 
                    after:bg-[#050d7a]
                    after:content-['']
                    sm:h-56
                    sm:w-56
                    after:sm:h-5/6
                    after:sm:w-5/6
                    "
				style={conic}
			>
				<span
					className="absolute
                    z-10 flex h-full
                    items-start
                    justify-center
                    sm:after:h-7
                    sm:after:w-2
                    after:w-1
                    after:h-4
                    after:rounded-full
                    after:bg-slate-400 
                    after:transition-all
                    after:duration-500
                    "
					style={content}
				></span>
				<span className="z-10 text-4xl font-[600] text-neutral-100 sm:text-6xl" 
                style={{color:`${colors}`}}
                >
					{title === "HOUR" && ampm > 12 ? data + 12 : data}
				</span>
			</div>
			<span className="z-50 mt-[20px] text-xl font-[600] text-neutral-100 sm:text-2xl">
				{title}
			</span>
		</section>
	);
}

// after: rounded - full;
// after: bg - white;
// after: transition - all;
// after: duration - 500;
