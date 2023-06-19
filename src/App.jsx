import Timer from "./Timer";

function App() {
	return (
		<>
			<h1
				className="
                uppercase
                block
                p-6 
                sm:p-10 
                text-center 
                text-4xl 
                font-bold 
                text-[#ffffff]
                "
			>
				Clock
			</h1>
			<Timer />
		</>
	);
}

export default App;
