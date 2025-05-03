import { NavLink } from "react-router-dom"
import projectGIF from "../../images/project.gif"
import taskGIF from "../../images/task.gif"
import managementGIF from "../../images/management.gif"
import signInGIF from "../../images/add.gif"
import ReminderAlert from "../../components/Reminder/ReminderAlert"


const HomePage = () => {
  return (
    <div className="flex flex-col">

<div className="mt-4 mb-6 p-4 pt-6 pl-[100px] pr-[100px] flex flex-row justify-between bg-white/60 h-[220px] rounded-2xl text-center">
      <div className="flex flex-row justify-center items-center gap-3 shadow-2xl p-3 bg-amber-300 w-[300px] mb-5 h-[170px] rounded-2xl font-bold">
      
        <NavLink to="/project">Add Project
        <img src={projectGIF} alt="Project Icon" className="w-20 h-20 mt-2 rounded-3xl" />
        </NavLink>
      </div>

      <div className="flex flex-row justify-center items-center gap-3 shadow-2xl p-3 bg-blue-300 w-[300px] h-[170px] mb-5 rounded-2xl font-bold">
      <NavLink to="/project-list">Project List
      <img src={taskGIF} alt="Project Icon" className="w-20 h-20 mt-2 rounded-3xl" />
      </NavLink>
      </div>

      <div className="flex flex-row justify-center items-center shadow-2xl gap-3 p-3 bg-pink-500 w-[300px] h-[170px] mb-5 rounded-2xl font-bold">
        <NavLink to="/user-management">User Management
        <img src={managementGIF} alt="Project Icon" className="w-20 h-20 mt-2 ml-8 rounded-3xl" />
        </NavLink>
      </div>

      <div className="flex flex-row justify-center items-center shadow-2xl gap-3 p-3 bg-lime-400 w-[300px] h-[170px] mb-5 rounded-2xl font-bold">
        <NavLink to="/profile">Profile
        <img src={signInGIF} alt="Project Icon" className="w-20 h-20 mt-2 rounded-3xl" />
        </NavLink>
      </div>

      
        
      
    </div>

      <div className=" bg-white/60 pb-4 rounded-2xl text-center flex flex-col justify-start items-center h-[310px] overflow-y-auto">
      <h2 className="font-bold mt-2 mb-4">Reminders</h2>
        <ReminderAlert/>
      </div>
    </div>
  )
}

export default HomePage