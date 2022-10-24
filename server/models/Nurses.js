import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const Nurses = sequelize.define(
	"nurses",
	{
		nurse_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		nurse_name: {
			type: DataTypes.CHAR,
		},
		nurse_type: {
			type: DataTypes.CHAR,
		},
	},
	{ timestamps: false }
);
