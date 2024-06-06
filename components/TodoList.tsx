import React from "react";
import Task from "./Task";
import { ITask } from "@/types/tasks";
import { BASE_URL } from "@/constants";

const TodoList = async () => {
  const response = await fetch(`${BASE_URL}/todos`, {
    cache: "no-cache",
  });
  const tasks: ITask[] = await response.json();

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Tasks</th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
