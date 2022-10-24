import React from "react";
import axios from "axios";
import Button from "./Button";
import "./QueryComponent.css";

const QueryComponent = ({endpoint, queryText}) => {

	const queryFunction = () => {
		axios.get(endpoint).then(res => console.log(res.data));
	};

	return (
		<div className="query-container">
			<Button text={queryText} onClick={queryFunction} />
		</div>
	);
};

export default QueryComponent;
