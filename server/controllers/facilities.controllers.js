import { getMostFrequentObject } from "../helpers/getMostFrequentObject.js";
import { Facilities, ClinicianWorkHistory, Nurses } from "../models/index.js";

export const getFacilities = (req, res) => {
	Facilities.findAll()
		.then(facilites => res.status(200).json(facilites))
		.catch(err => {
			console.log(err);
			res.sendStatus(400);
		});
};

export const getFacilitiesMostHiredNurses = (req, res) => {
	const facilitiesWorkHistory = Facilities.findAll({
		include: {
			model: ClinicianWorkHistory,
			where: { worked_shift: true },
			attributes: ["nurse_id", "worked_shift"],
		},
		order: [["facility_id", "asc"]],
	});
	
	const nurses = Nurses.findAll();

	Promise.all([facilitiesWorkHistory, nurses])
		.then(responses => {
			const facilitiesData = responses[0];
			const nursesData = responses[1];

			return facilitiesData.map(
				({ facility_id, facility_name, clinician_work_histories }) => {
					
					const mostHiredNurse = getMostFrequentObject(
						clinician_work_histories,
						"nurse_id"
					);

					const nurseName = nursesData.find(
						({ nurse_id }) => nurse_id == "100" + mostHiredNurse
					).nurse_name;

					return {
						facility_id,
						facility_name: facility_name.trim(),
						most_hired_nurse: nurseName.trim(),
					};
				}
			);
		})
		.then(facilites => res.status(200).json(facilites))
		.catch(err => {
			console.log(err);
			res.sendStatus(400);
		});
};
