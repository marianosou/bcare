import * as dotenv from "dotenv"
import express from "express";
import cors from "cors";
import { sequelize } from "./database/db.js";
import "./models/index.js";
import routes from "./routes/index.js";

dotenv.config();
const app = express();

app.use(cors());
app.use("/api", routes);

const PORT = process.env.PORT || 5000;

const main = async () => {
	try {
		await sequelize.sync({ alter: true, force: false });
		console.log("Connection has been established succesfully");
		app.listen(PORT, () => console.log(`Server running in port: ${PORT}`));
	} catch (error) {
		console.error("Unable to connect to the databse", error);
	}
};

main();
