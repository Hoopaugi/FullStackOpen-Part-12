import { Request, Response } from "express"

import Todo from "./todos"

const getAll = async (req: Request, res: Response) => {
  const todos = await Todo.find({})

  res.send(todos)
}

const getById = async (req: Request, res: Response) => {
  const { id } = req.params

  const todo = await Todo.findById(id)

  if (!todo) {
    res.sendStatus(404)
  } else {
    res.send(todo)
  }
}

const create = async (req: Request, res: Response) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })

  res.send(todo);
}

const remove = async (req: Request, res: Response) => {
  const { id } = req.params

  await Todo.findByIdAndDelete(id)

  res.sendStatus(200)
}

const update = async (req: Request, res: Response) => {
  const { id } = req.params

  const updatedTodo = await Todo.findByIdAndUpdate(id, { ...req.body }, { new: true })

  res.send(updatedTodo)
}

export default { create, getAll, getById, remove, update }
