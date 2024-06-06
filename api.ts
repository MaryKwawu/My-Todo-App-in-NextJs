import { ITask } from "./types/tasks";
import * as fs from "fs";
import * as path from "path";

export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://my-todo-app-in-next-js.vercel.app";

export function saveToDb(todos: Record<string, any>) {
  fs.writeFileSync(
    path.join(process.cwd(), "public/data/todos.json"),
    JSON.stringify(todos)
  );
}
