import { Jobs, Nurses } from "../models/index.js";

export const getNursesHirePossibilities = (req, res) => {
	const nurses = Nurses.findAll({
		order: [["nurse_id", "asc"]],
	});
	const jobs = Jobs.findAll({ include: "nurses_working" });
	Promise.all([nurses, jobs])
		.then(responses => {
			const nursesData = responses[0];
			const jobsData = responses[1];

			return nursesData.map(({ nurse_id, nurse_type, nurse_name }) => {
				const nurseHirePossibilities = jobsData.filter(
					({
						nurse_type_needed,
						total_number_nurses_needed,
						nurses_working,
					}) => {
						return (
							nurse_type === nurse_type_needed &&
							total_number_nurses_needed - nurses_working.length &&
							!nurses_working.some(({ id }) => id === nurse_id)
						);
					}
				).length;
				return {
					nurse_id,
					nurse_type: nurse_type.trim(),
					nurse_name: nurse_name.trim(),
					hire_possibilities: nurseHirePossibilities,
				};
			});
		})
		.then(nurseHirePossibilities =>
			res.status(200).json(nurseHirePossibilities)
		)
		.catch(err => {
			console.log(err);
			res.sendStatus(400);
		});
};
