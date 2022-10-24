import { Router } from "express";
const router = Router();

import {
	getFacilities,
	getFacilitiesMostHiredNurses,
} from "../controllers/facilities.controllers.js";

router.get("/", getFacilities);
router.get("/mosthirednurses", getFacilitiesMostHiredNurses);

export default router;
