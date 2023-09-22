import { Request, Response } from "express"

import config from "../config"
import redis from "../redis"

const get = async (req: Request, res: Response) => {
  const addedTodos = await redis.get('added_todos')

  res.send({
    added_todos: Number(addedTodos)
  })
}

export default { get }
