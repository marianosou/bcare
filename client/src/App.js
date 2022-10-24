import React from "react";
import Queries from "./views/Queries";
import NursesHiringPriorityScore from "./views/NursesHiringPriorityScore";
import "./App.css";

function App() {
	return (
		<div className="App">
			<NursesHiringPriorityScore />
			<Queries />
		</div>
	);
}

export default App;
