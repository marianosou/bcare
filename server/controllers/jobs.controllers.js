import { Jobs } from "../models/index.js";

export const getJobsAvailable = (req, res) => {
	Jobs.findAll({
		include: "nurses_working",
		order: [["job_id", "asc"]],
	})
		.then(jobs =>
			jobs.map(
				({
					job_id,
					nurse_type_needed,
					total_number_nurses_needed,
					nurses_working,
				}) => {
					return {
						job_id,
						nurse_type_needed: nurse_type_needed.trim(),
						remaining_spots: total_number_nurses_needed - nurses_working.length,
					};
				}
			)
		)
		.then(jobsAvailable => res.status(200).json(jobsAvailable))
		.catch(err => {
			console.log(err);
			res.sendStatus(400);
		});
};
