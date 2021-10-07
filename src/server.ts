// Third-party requirements
import Fastify, { FastifyInstance } from "fastify";

// CONSTANTS
export const fakeDatabase = [
  { name: "todo one" },
  { name: "todo two" },
  { name: "todo three"}
]

// Function
export function buildServer(options = {}): FastifyInstance{
  const server = Fastify(options)
  // Routes
  server.get('/todos', getAllTodos)

  return server
}

async function getAllTodos(): Promise<Todo[]>{
  return fakeDatabase
}

// Type definition
interface Todo {
  name: string
}
