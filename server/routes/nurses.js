import { Router } from "express";
const router = Router();

import { getNurses } from "../controllers/nurses.controllers.js";

router.get("/", getNurses);

export default router;
