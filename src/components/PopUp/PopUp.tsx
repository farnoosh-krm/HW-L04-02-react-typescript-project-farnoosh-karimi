import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../features/Tasks/taskSlice'; 
import { AppDispatch } from "../../features/store";
import { Task } from '../../types/Task';
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { User } from "../../types/User";

interface PopUpProps {
  onClose: () => void;
  projectId: number;
}

const PopUp: React.FC<PopUpProps> = ({ onClose, projectId }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [status, setStatus] = useState<"not started" | "to do" | "done">("not started");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");

  const dispatch = useDispatch<AppDispatch>();
  const users: User[] = useSelector((state: RootState) => state.users);
const [assignedTo, setAssignedTo] = useState<number | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !dueDate || !status || !priority) {
      alert("Please fill in all fields");
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      dueDate,
      status,
      priority,
      projectId,
      assignedTo,
    };

    dispatch(addTask(newTask));
    onClose();

    // Clear form
    setTitle("");
    setDescription("");
    setDueDate("");
    setStatus("not started");
    setPriority("medium");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/10">
      <div className="py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="text-white relative px-4 py-10 bg-indigo-400/60 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="text-center pb-6">
              <h1 className="text-3xl">Add Task</h1>
            </div>

            <form onSubmit={handleSubmit}>
              <input
                className="shadow mb-4 border w-full py-2 px-3 text-gray-700 rounded-2xl bg-white/90 text-sm"
                type="text" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)} />
              <input
                className="shadow mb-4 border w-full py-2 px-3 text-gray-700 rounded-2xl bg-white/90 text-sm"
                type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
              <input
                className="shadow mb-4 border w-full py-2 px-3 text-gray-700 rounded-2xl bg-white/90 text-sm"
                type="text" placeholder="Date" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} value={dueDate} onChange={(e) => setDueDate(e.target.value)} />

              <select
                className="shadow mb-4 border w-full py-2 px-3 text-gray-700 rounded-2xl bg-white/90 text-sm"
                value={priority}
                onChange={(e) => setPriority(e.target.value as "low" | "medium" | "high")}
              >
                <option disabled>Choose Priority</option>
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
              </select>

              <select
                className="shadow mb-4 border w-full py-2 px-3 text-gray-700 rounded-2xl bg-white/90 text-sm"
                value={status}
                onChange={(e) => setStatus(e.target.value as "not started" | "to do" | "done")}
              >
                <option disabled>Choose status</option>
                <option value="not started">Not Started</option>
                <option value="to do">To Do</option>
                <option value="done">Done</option>
              </select>

              <select
                className="shadow mb-4 border w-full py-2 px-3 text-gray-700 rounded-2xl bg-white/90 text-sm"
                value={assignedTo}
                onChange={(e) => setAssignedTo(Number(e.target.value))}
              >
                <option value="" disabled>Assign to user</option>
                {users.map(user => (
                  <option key={user.id} value={user.id}>
                    {user.name} ({user.role})
                  </option>
                ))}
              </select>


              <div>
                <button
                  type="submit"
                  className="hover:shadow-form rounded-2xl bg-lime-400 py-3 px-8 text-base hover:bg-gray-900 hover:text-white font-semibold text-gray-800 outline-none"
                >
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
