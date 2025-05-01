import { useState } from "react";
import Button from "../../components/Button/Button";
import Inputs from "../../components/Inputs/Inputs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../features/store"
import React from "react"
import { Project } from "../../types/Projects"
import { addProject } from "../../features/projects/projectSlice";


const AddProjectPage = () => {

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [status, setStatus] = useState<"not started" | "in progress" | "completed">("not started");
  
  const dispatch = useDispatch<AppDispatch>()

  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault()

    if(!title || !description || !startDate || !endDate) {
      alert("Please fill in all fields")
      return
    }

    const newProject:Project = {id:Date.now(), title,description,startDate:new Date().toISOString().split('T')[0],endDate:new Date().toISOString().split('T')[0],status}
      dispatch(addProject(newProject))
      setTitle("")
      setDescription("")
      setStartDate("")
      setEndDate("")
      setStatus("not started")

  }
  
  return (
    <div className="mt-4   flex flex-row justify-center items-center h-[560px] rounded-2xl text-center bg-white/60">
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold'>Add Project</h1>

        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center mt-4 bg-white/30 rounded-2xl p-6 shadow-2xl'>

          <div className="flex flex-row gap-[20px]">
            <label className="text-sm mt-2 text-gray-800">Project Title</label>
            <Inputs type="text" placeholder="project title" width="500px" value={title} focusBorderColor="#ffba00 2px solid" onchange={e=>setTitle(e.target.value)}/>
          </div>

          <div className="flex flex-row gap-[30px]">
            <label className="text-sm mt-2 text-gray-800">Start Date</label>
            <Inputs type="date" placeholder="start date" width="500px" value={startDate} focusBorderColor="#ffba00 2px solid" onchange={e=>setStartDate(e.target.value)}/>
          </div>

          <div className="flex flex-row gap-[30px]">
            <label className="text-sm mt-2 text-gray-800">End Date</label>
            <Inputs type="date" placeholder="end date of project" width="500px" value={endDate} focusBorderColor="#ffba00 2px solid" onchange={e=>setEndDate(e.target.value)}/>
          </div>


          <div className="flex flex-row gap-[15px] mt-2">
            <label className="text-sm mt-2 text-gray-800">Description</label>
            <textarea rows={6} className="w-[500px] mb-4 p-2 resize-none focus:border-2 focus:border-amber-400 bg-white rounded-2xl focus:outline-0" name="description" placeholder="description" value={description} onChange={e=>setDescription(e.target.value)}></textarea> 
          </div>

          <div className="flex flex-row gap-[50px]">
            <label className="text-sm mt-2 text-gray-800">status</label>
            <select className="mb-2 bg-white w-[500px] rounded-2xl outline-0 border-0 focus:outline-0 p-2 text-sm focus:border-2 focus:border-amber-500" value={status} onChange={e=>setStatus(e.target.value as "not started" | "in progress" | "completed")}>
              <option value="not started">Not Started</option>
              <option value="in progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          
          <Button type="submit" label="Add Project" widthBtn="200px" colorBtn="bg-amber-500" colorBtnText="text-gray-800" />
          
        </form>

      </div>
    </div>
  )
}

export default AddProjectPage