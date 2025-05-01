import React, { useState } from 'react';
import Inputs from '../../components/Inputs/Inputs';
import Button from '../../components/Button/Button';
import PopUp from '../../components/PopUp/PopUp';
import TaskTable from './TaskTable';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import { Task } from '../../types/Task';



const TaskPage = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const { projectId } = useParams<{ projectId: string }>();
  const numericProjectId = Number(projectId);

  const tasks = useSelector((state: RootState) =>
    state.tasks.filter((task: Task) => task.projectId === numericProjectId)
  );

  const handleAddTaskClick = () => {
    setIsPopUpOpen(true);
  };

  const handleClosePopUp = () => {
    setIsPopUpOpen(false);
  };

  return (
    <div className="mt-4 p-4 flex flex-col bg-white/60 h-[560px] rounded-2xl text-center">
      <div className='flex flex-row justify-between'>
      <div className='flex flex-row'>
        <Inputs type='text' placeholder='enter title' focusBorderColor='border-purple-500' width='250px'/>
        <div className="flex flex-row gap-[50px] m-2">
          <select className="bg-white w-[250px] h-[37px] rounded-2xl outline-0 border-0 focus:outline-0 p-2 text-sm focus:border-2 focus:border-amber-500">
            <option selected disabled>choose priority</option> 
            <option value="not started">low</option>
            <option value="in progress">medium</option>
            <option value="completed">high</option>
          </select>
        </div>

        <div className="flex flex-row gap-[50px] m-2">
          <select className="bg-white w-[250px] h-[37px] rounded-2xl outline-0 border-0 focus:outline-0 p-2 text-sm focus:border-2 focus:border-amber-500">
            <option selected disabled>choose status</option>
            <option value="not started">Not Started</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <Button type='button' label='Search' widthBtn='100px' colorBtn='bg-purple-500'/>
      </div>

      <div>
        <Button type='button' label='+ Add New Task' widthBtn='250px' colorBtn='bg-purple-600' onclick={handleAddTaskClick}/>
      </div>

      {isPopUpOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80">
            <PopUp onClose={handleClosePopUp} />
          </div>
        )}
      </div>


      <div className="mt-4">
        <TaskTable tasks={tasks} />
      </div>
      
    </div>
  );
};

export default TaskPage;
