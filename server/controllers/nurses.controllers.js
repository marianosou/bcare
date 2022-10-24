import { Nurses } from "../models/index.js";

export const getNurses = (req, res) => {
	Nurses.findAll()
		.then(nurses => res.status(200).json(nurses))
		.catch(err => {
			console.log(err);
			res.sendStatus(400);
		});
};
