import { Router } from "express";
const router = Router();

import { getJobsAvailable } from "../controllers/jobs.controllers.js";

router.get("/", getJobsAvailable);

export default router;
