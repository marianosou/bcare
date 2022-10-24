import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const Facilities = sequelize.define(
	"facilities",
	{
		facility_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		facility_name: {
			type: DataTypes.CHAR,
		},
	},
	{ timestamps: false }
);
