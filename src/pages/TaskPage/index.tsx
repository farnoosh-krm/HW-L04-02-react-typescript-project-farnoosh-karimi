import Inputs from "../../components/Inputs/Inputs";
import Button from "../../components/Button/Button";
import PopUp from "../../components/PopUp/PopUp";
import TaskTable from "./TaskTable";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { Task } from "../../types/Task";
import { useState } from "react";

const TaskPage = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const { projectId } = useParams<{ projectId: string }>();
  const numericProjectId = Number(projectId);

  const filteredTasks = useSelector((state: RootState) =>
    state.tasks.filter(
      (task: Task) =>
        task.projectId === numericProjectId &&
        (task.title.toLowerCase().includes(searchTitle.toLowerCase()) ||
          searchTitle === "") &&
        (task.priority === selectedPriority || selectedPriority === "") &&
        (task.status === selectedStatus || selectedStatus === "")
    )
  );

  const handleAddTaskClick = () => {
    setIsPopUpOpen(true);
  };

  const handleClosePopUp = () => {
    setIsPopUpOpen(false);
  };

  return (
    <div className="mt-4 p-4 flex flex-col bg-white/60 h-[560px] rounded-2xl text-center">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <Inputs
            type="text"
            placeholder="enter title"
            focusBorderColor="border-purple-500"
            width="250px"
            value={searchTitle}
            onchange={(e) => setSearchTitle(e.target.value)}
          />

          <div className="flex flex-row gap-[50px] m-2">
            <select
              className="bg-white w-[250px] h-[37px] rounded-2xl outline-0 border-0 focus:outline-0 p-2 text-sm focus:border-2 focus:border-amber-500"
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
            >
              <option value="" disabled>
                choose priority
              </option>
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="high">high</option>
            </select>
          </div>

          <div className="flex flex-row gap-[50px] m-2">
            <select
              className="bg-white w-[250px] h-[37px] rounded-2xl outline-0 border-0 focus:outline-0 p-2 text-sm focus:border-2 focus:border-amber-500"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="" disabled>
                choose status
              </option>
              <option value="not started">not started</option>
              <option value="to do">to do</option>
              <option value="done">done</option>
            </select>
          </div>
        </div>

        <div>
          <Button
            type="button"
            label="+ Add New Task"
            widthBtn="250px"
            colorBtn="bg-purple-600"
            onclick={handleAddTaskClick}
          />
        </div>

        {isPopUpOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80">
            <PopUp onClose={handleClosePopUp} projectId={numericProjectId} />
          </div>
        )}
      </div>
      <div className="mt-4">
        <TaskTable tasks={filteredTasks} />
      </div>
    </div>
  );
};

export default TaskPage;
