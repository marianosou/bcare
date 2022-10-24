import { ClinicianWorkHistory } from "./ClinicianWorkHistory.js";
import { Facilities } from "./Facilities.js";
import { Jobs } from "./Jobs.js";
import { Nurses } from "./Nurses.js";
import { NurseHiredJobs } from "./NurseHiredJobs.js";

Facilities.hasMany(ClinicianWorkHistory, { foreignKey: "facility_id" });

Facilities.hasMany(Jobs, { foreignKey: "facility_id" });

Jobs.hasMany(NurseHiredJobs, {as: "nurses_working", foreignKey:"job_id"});

Nurses.belongsToMany(Jobs, { through: NurseHiredJobs, foreignKey: "nurse_id" });

Jobs.belongsToMany(Nurses, { through: NurseHiredJobs, foreignKey: "job_id" });

export { ClinicianWorkHistory, Facilities, Jobs, Nurses, NurseHiredJobs };
