import { Router } from "express";
const router = Router();

import { getPriorityScorePerFacility } from "../controllers/clinicianWorkHistory.controllers.js";

router.get("/:facilitiyId", getPriorityScorePerFacility)

export default router;
