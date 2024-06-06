import Image from "next/image";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { ITask } from "@/types/tasks";
import { BASE_URL } from "@/api";

export default async function Home() {
  const response = await fetch(`${BASE_URL}/todos`, {
    cache: 'no-cache'
  });
  const tasks: ITask[] = await response.json();


  return (
    <main className="max-w-4xl mx-auto  mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">My Todo List App</h1>
        <AddTask />
      </div>
      <TodoList tasks={tasks} />
    </main>
  );
}
