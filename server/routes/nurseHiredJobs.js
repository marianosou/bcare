import { Router } from "express";
const router = Router();

import { getNursesHirePossibilities } from "../controllers/nurseHiredJobs.controllers.js";

router.get("/", getNursesHirePossibilities);

export default router;
