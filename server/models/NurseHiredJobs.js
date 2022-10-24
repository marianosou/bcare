import { sequelize } from "../database/db.js";

export const NurseHiredJobs = sequelize.define(
	"nurse_hired_jobs",
	{},
	{ timestamps: false }
);
