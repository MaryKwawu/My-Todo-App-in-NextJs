import { saveToDb } from "@/api";
import todos from "@/public/data/todos.json";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const task = todos.tasks.find((todo) => todo.id === id);

  if (task) {
    return Response.json(task);
  }

  return new NextResponse(JSON.stringify(null), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 404,
  });
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = (await request.json()) as { text: string };
  const { text } = body;
  const { id } = params;

  const taskIndex = todos.tasks.findIndex((todo) => todo.id === id);

  if (taskIndex === -1) {
    return new NextResponse(JSON.stringify(null), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 404,
    });
  }

  todos.tasks[taskIndex] = {
    ...todos.tasks[taskIndex],
    text
  };
 
  saveToDb(todos);

  return redirect("/");
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const tasks = todos.tasks.filter((todo) => todo.id !== id);

  todos.tasks = tasks;

  saveToDb(todos);

  return redirect("/");
}
