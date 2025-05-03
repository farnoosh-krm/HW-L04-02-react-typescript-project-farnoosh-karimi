
import { Project } from '../../types/Projects';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../features/store';
import Button from '../../components/Button/Button';
import { removeProject } from '../../features/projects/projectSlice';
import { useNavigate } from 'react-router-dom';



const ProjectList = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const projects: Project[] = useSelector((state: RootState) => state.projects);


  const handleRemove = (id: number) => {
    dispatch(removeProject(id));
  };

  const handleTask = (id: number) => {
    navigate(`/task/${id}`);
  };



  return (
    <div className="mt-4 p-4 flex flex-col justify-start items-center bg-white/60 h-[560px] rounded-2xl text-center">
      <h3 className='text-lg font-bold text-gray-800'>Project List</h3>
      <table className='table-fixed w-[1400px] mt-4 border-separate border border-gray-400 bg-white/40 rounded-lg overflow-y-auto'>
        <thead>
          <tr>
            <th className='border border-gray-300'>ID</th>
            <th className='border border-gray-300'>Project Title</th>
            <th className='border border-gray-300'>Start Date</th>
            <th className='border border-gray-300'>End Date</th>
            <th className='border border-gray-300'>Status</th>
            <th className='border border-gray-300'>Description</th>
            <th className='border border-gray-300'>Tasks</th>
            <th className='border border-gray-300'>Action</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index} className='hover:bg-indigo-200/50'>
              <td className='border border-gray-300'>{project.id}</td>
              <td className='border border-gray-300'>{project.title}</td>
              <td className='border border-gray-300'>{project.startDate}</td>
              <td className='border border-gray-300'>{project.endDate}</td>
              <td className='border border-gray-300'>{project.status}</td>
              <td className='border border-gray-300'>{project.description}</td>
              <td className='border border-gray-300'>
                <Button 
                  type='button' 
                  label='Tasks' 
                  widthBtn='100px' 
                  colorBtn='bg-indigo-500' 
                  onclick={() => handleTask(project.id)} 
                />
              </td>
              <td className='border border-gray-300'>
                <Button 
                  type='button' 
                  label='delete' 
                  widthBtn='100px' 
                  colorBtn='bg-indigo-500' 
                  onclick={() => handleRemove(project.id)} 
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


export default ProjectList