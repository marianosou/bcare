import { Router } from "express";

import facililties from "./facilities.js";
import workHistories from "./clinicianWorkHistory.js";
import jobs from "./jobs.js";
import nurseHiredJobs from "./nurseHiredJobs.js";
import nurse from "./nurses.js";

const router = Router();

router.use("/facilities", facililties);
router.use("/workhistories", workHistories);
router.use("/jobs", jobs);
router.use("/nursehiredjobs", nurseHiredJobs);
router.use("/nurses", nurse);

export default router;
