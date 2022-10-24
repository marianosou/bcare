import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "./Button";
import "./NursesHiringPriorityScoreForm.css";

const NursesHiringPriorityScoreForm = ({ setNursesPriorityScore }) => {
	const [facilities, setFacilities] = useState([]);
	const [facilitySelected, setFacilitySelected] = useState();

	useEffect(() => {
		const getFacilities = () => {
			axios
				.get("http://localhost:5000/api/facilities")
				.then(res => setFacilities(res.data));
		};
		getFacilities();
	}, []);

	const handleChange = event => {
		setFacilitySelected(event.target.value);
		cleanPriorityScore();
	};

	const cleanPriorityScore = () => {
		setNursesPriorityScore([]);
	};

	const handleSubmit = event => {
		event.preventDefault();
		getNursesPriorityScore(facilitySelected);
	};

	const getNursesPriorityScore = id => {
		axios
			.get(`http://localhost:5000/api/workHistories/${id}`)
			.then(res => setNursesPriorityScore(res.data));
	};

	return (
		<form
			className="nurses-hiring-priority-score-form-container"
			onSubmit={handleSubmit}
		>
			<select name="facility" onChange={handleChange}>
				<option value="">Select Facility</option>
				{facilities.map(({ facility_id, facility_name }) => (
					<option key={facility_id} value={facility_id}>
						{facility_name}
					</option>
				))}
			</select>
			<Button text="Submit" disableOption={!facilitySelected} />
		</form>
	);
};

export default NursesHiringPriorityScoreForm;
