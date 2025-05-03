
import { NavLink } from 'react-router-dom'

const MenuBar = () => {
  return (
    <div className='p-5 flex flex-row items-start justify-between  bg-white/60 h-[65px] rounded-2xl'>
        <h1 className='flex flex-row items-start justify-start font-bold'>
          <NavLink className={({isActive})=> isActive ? "font-bold text-black border-b-4 border-purple-900" : "text-gray-800"}
            to="/home">
            Dashboard
          </NavLink>
        </h1>

        <ul className='flex flex-row items-end justify-end gap-9'>
            <li>
              <NavLink 
                className={({isActive})=> isActive ? "font-bold text-black border-b-4 border-purple-900" : "text-gray-800"}
                to="/project">
                    Add Project
                </NavLink>
              </li>

              <li>
              <NavLink 
                className={({isActive})=> isActive ? "font-bold text-black border-b-4 border-purple-900" : "text-gray-800"}
                to="/project-list">
                    Project List
                </NavLink>
              </li>


              {/* <li>
              <NavLink 
                className={({isActive})=> isActive ? "font-bold text-black border-b-4 border-purple-900" : "text-gray-800"}
                to="/tasks">
                    Tasks
                </NavLink>
              </li> */}


              <li>
              <NavLink 
                className={({isActive})=> isActive ? "font-bold text-black border-b-4 border-purple-900" : "text-gray-800"}
                to="/user-management">
                    User Management
                </NavLink>
              </li>

              <li>
              <NavLink 
                className={({isActive})=> isActive ? "font-bold text-black border-b-4 border-purple-900" : "text-gray-800"}
                to="/profile">
                    Profile
                </NavLink>
              </li>
        </ul>

        
    </div>
  )
}

export default MenuBar

