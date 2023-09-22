import { Router } from "express";

import handlers from "./todos.handlers";

const router = Router()

router.get('/', handlers.getAll)
router.get('/:id', handlers.getById)
router.post('/', handlers.create)
router.put('/:id', handlers.update)
router.delete('/:id', handlers.remove)

export default router
