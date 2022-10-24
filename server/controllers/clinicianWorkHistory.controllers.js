import { sequelize } from "../database/db.js";
import { ClinicianWorkHistory } from "../models/index.js";

export const getPriorityScorePerFacility = (req, res) => {
	ClinicianWorkHistory.findAll({
		where: { facility_id: req.params.facilitiyId },
		group: ["nurse_id"],
		attributes: [
			"nurse_id",
			[
				sequelize.literal(
					`sum(CASE 
							  WHEN "worked_shift" THEN 1
							  WHEN "call_out" THEN -3
					     	  WHEN "no_call_no_show" THEN -5
							  ELSE 0
						 END)`
				),
				"priority_score",
			],
		],
		order: [
			["priority_score", "desc"],
			["nurse_id", "desc"],
		],
	})
		.then(priorityScores => res.status(200).json(priorityScores))
		.catch(err => {
			console.log(err);
			res.sendStatus(400);
		});
};
