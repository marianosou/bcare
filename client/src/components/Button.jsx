import React from "react";
import "./Button.css";

const Button = ({disableOption, onClick, text}) => {
	return (
		<button disabled={disableOption} onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;
