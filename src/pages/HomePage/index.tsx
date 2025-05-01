import { NavLink } from "react-router-dom"
import projectGIF from "../../images/project.gif"
import taskGIF from "../../images/task.gif"
import managementGIF from "../../images/management.gif"
import signInGIF from "../../images/add.gif"


const HomePage = () => {
  return (
    <div className="mt-4 p-4 pl-[100px] pr-[100px] flex flex-row justify-between bg-white/60 h-[560px] rounded-2xl text-center">
      <div className="flex flex-row justify-center items-center gap-3 p-3 bg-amber-300 w-[300px] mb-5 h-[170px] rounded-2xl font-bold">
      
        <NavLink to="/project">Add Project
        <img src={projectGIF} alt="Project Icon" className="w-20 h-20 mt-2 rounded-3xl" />
        </NavLink>
      </div>

      <div className="flex flex-row justify-center items-center gap-3 p-3 bg-blue-300 w-[300px] h-[170px] mb-5 rounded-2xl font-bold">
      <NavLink to="/project-list">Project List
      <img src={taskGIF} alt="Project Icon" className="w-20 h-20 mt-2 rounded-3xl" />
      </NavLink>
      </div>

      <div className="flex flex-row justify-center items-center gap-3 p-3 bg-pink-500 w-[300px] h-[170px] mb-5 rounded-2xl font-bold">
        <NavLink to="/user-management">User Management
        <img src={managementGIF} alt="Project Icon" className="w-20 h-20 mt-2 ml-8 rounded-3xl" />
        </NavLink>
      </div>

      <div className="flex flex-row justify-center items-center gap-3 p-3 bg-lime-400 w-[300px] h-[170px] mb-5 rounded-2xl font-bold">
        <NavLink to="/sign-in">Account
        <img src={signInGIF} alt="Project Icon" className="w-20 h-20 mt-2 rounded-3xl" />
        </NavLink>
      </div>
    </div>
  )
}

export default HomePage