import { Request, Response } from 'express';

let todos: any[] = [];

export const getTodos = (req: Request, res: Response) => {
  res.json(todos);
};

export const createTodo = (req: Request, res: Response) => {
  const todo = req.body;
  todos.push(todo);
  res.status(201).json(todo);
};

export const updateTodo = (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedTodo = req.body;
  todos = todos.map(todo => todo.id === id ? updatedTodo : todo);
  res.json(updatedTodo);
};

export const deleteTodo = (req: Request, res: Response) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id !== id);
  res.status(204).send();
};