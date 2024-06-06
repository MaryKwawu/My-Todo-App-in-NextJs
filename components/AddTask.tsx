"use client";

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { useSearchParams } from "next/navigation";

function AddTask() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskvalue] = useState<string>("");

  const handleSubmitnewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await fetch("/todos", {
      method: "POST",
      body: JSON.stringify({
        text: newTaskValue,
      }),
      cache: "no-cache",
    });
    setNewTaskvalue("");
    setModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full"
      >
        Add new task
        <AiOutlinePlus className="ml-2" size={18} />
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitnewTodo}>
          <h3 className="font-bold text-lg">Add new task</h3>
          <div className="modal-action">
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskvalue(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered  w-full"
            />
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default AddTask;
