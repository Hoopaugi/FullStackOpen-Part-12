import { Router } from "express";

import handlers from "./statistics.handlers";

const router = Router()

router.get('/', handlers.get)

export default router
