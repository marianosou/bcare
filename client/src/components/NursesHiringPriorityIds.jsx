import React from "react";
import "./NursesHiringPriorityIds.css";

const NursesHiringPriorityIds = ({ nursesPriorityScore }) => {
	return (
		<div className="nurses-hiring-priority-ids-container">
			{nursesPriorityScore.map(({ nurse_id }) => (
				<div key={nurse_id}>
					<p>{nurse_id}</p>
				</div>
			))}
		</div>
	);
};

export default NursesHiringPriorityIds;
