import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const Jobs = sequelize.define(
	"jobs",
	{
		job_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		nurse_type_needed: {
			type: DataTypes.CHAR,
		},
		total_number_nurses_needed: {
			type: DataTypes.INTEGER,
		},
	},
	{ timestamps: false }
);


