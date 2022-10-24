import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const ClinicianWorkHistory = sequelize.define(
	"clinician_work_history",
	{
		work_history_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		nurse_id: {
			type: DataTypes.INTEGER,
		},
		worked_shift: {
			type: DataTypes.BOOLEAN,
		},
		call_out: {
			type: DataTypes.BOOLEAN,
		},
		no_call_no_show: {
			type: DataTypes.BOOLEAN,
		},
	},
	{ timestamps: false }
);
