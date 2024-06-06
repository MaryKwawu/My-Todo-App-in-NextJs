import todos from "@/public/data/todos.json";

import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { redirect } from "next/navigation";
import { saveToDb } from "@/api";

export async function GET() {
  return Response.json(todos.tasks);
}

export async function POST(request: Request) {
  const body = (await request.json()) as { text: string };
  const { text } = body;

  const newTodo = {
    id: uuidv4(),
    text,
  };

  todos.tasks.push(newTodo);
  saveToDb(todos);

  return redirect("/");
}
