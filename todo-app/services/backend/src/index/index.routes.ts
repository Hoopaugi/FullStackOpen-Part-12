import { Router } from "express";

import handlers from "./index.handlers";

const router = Router()

router.get('/', handlers.get)

export default router
