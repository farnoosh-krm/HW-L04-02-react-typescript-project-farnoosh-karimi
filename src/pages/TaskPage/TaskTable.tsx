import React from "react";
import Button from "../../components/Button/Button";
import { Task } from "../../types/Task";
import { RootState } from '../../features/store';
import { useDispatch, useSelector } from "react-redux";
import { removeTask,updateTask } from '../../features/Tasks/taskSlice';


type Props = {
  tasks: Task[];
};

const TaskTable: React.FC<Props> = ({ taskProps }) => {

  const dispatch = useDispatch();
  const tasks: Task[] = useSelector((state: RootState) => state.tasks);
  

  const handleUpdateTask = (taskId: number) => {
    dispatch(updateTask(taskId))
  };

  const handleRemoveTask = (taskId: number) => {
    dispatch(removeTask(taskId))
  };

  return (
    <div className="mt-4 p-4 flex flex-col justify-start items-center bg-white/60 rounded-2xl text-center">
      <h3 className="text-lg font-bold text-gray-800">Task List</h3>
      <table className="table-fixed w-full mt-4 border-separate border border-gray-400 bg-white/40 rounded-lg">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Title</th>
            <th className="border border-gray-300 p-2">Priority</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Due Date</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td colSpan={5} className="p-4 text-gray-500">
                No tasks found for this project.
              </td>
            </tr>
          ) : (
            tasks.map((task) => (
              <tr key={task.id} className="hover:bg-indigo-200/50">
                <td className="border border-gray-300 p-2">{task.id}</td>
                <td className="border border-gray-300 p-2">{task.title}</td>
                <td className="border border-gray-300 p-2">{task.priority}</td>
                <td className="border border-gray-300 p-2">{task.status}</td>
                <td className="border border-gray-300 p-2">{task.dueDate}</td>
                <td className="border border-gray-300 p-2 flex gap-2 justify-center">
                  <Button
                    type="button"
                    label="Edit"
                    widthBtn="80px"
                    colorBtn="bg-indigo-500"
                    onclick={() => handleUpdateTask(task.id)}
                  />
                  <Button
                    type="button"
                    label="Delete"
                    widthBtn="80px"
                    colorBtn="bg-red-500"
                    onclick={() => handleRemoveTask(task.id)}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
