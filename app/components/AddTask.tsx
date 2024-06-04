import { AiOutlinePlus } from "react-icons/ai";
function AddTask() {
  return (
    <div>
      <button className="btn btn-primary w-full">
        Add new task
        <AiOutlinePlus className="ml-2" size={18} />
      </button>
    </div>
  );
}

export default AddTask;
