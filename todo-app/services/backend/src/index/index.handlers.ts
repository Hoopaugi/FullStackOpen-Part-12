import { Request, Response } from "express"

import config from "../config"

let visits = 0

const get = async (req: Request, res: Response) => {
  visits++

  res.send({
    ...config,
    visits
  })
}

export default { get }
