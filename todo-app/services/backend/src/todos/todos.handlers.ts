import { Request, Response } from "express"

import Todo from "./todos"
import redis from "../redis"

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
  const addedTodos = await redis.get('added_todos')

  await redis.set('added_todos', String(Number(addedTodos) + 1))

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
