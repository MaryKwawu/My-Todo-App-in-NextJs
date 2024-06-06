
import * as fs from "fs";
import * as path from "path";



export function saveToDb(todos: Record<string, any>) {
  fs.writeFileSync(
    path.join(process.cwd(), "public/data/todos.json"),
    JSON.stringify(todos)
  );
}
