import React, { useState } from "react";
import NursesHiringPriorityScoreForm from "../components/NursesHiringPriorityScoreForm";
import NursesHiringPriorityIds from "../components/NursesHiringPriorityIds";
import "./NursesHiringPriorityScore.css";

const NursesHiringPriorityScore = () => {
	const [nursesPriorityScore, setNursesPriorityScore] = useState([]);

	return (
		<div className="nurses-hiring-priority-score-container">
			<NursesHiringPriorityScoreForm
				setNursesPriorityScore={setNursesPriorityScore}
			/>
			<NursesHiringPriorityIds nursesPriorityScore={nursesPriorityScore} />
		</div>
	);
};

export default NursesHiringPriorityScore;
