import { User } from '../../types/User';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../features/store';
import Button from '../../components/Button/Button';
import { removeUser } from '../../features/users/UserSlice';

const UserManagement = () => {
  const dispatch = useDispatch();
  const users: User[] = useSelector((state: RootState) => state.users);

  const handleRemove = (id: number) => {
    dispatch(removeUser(id));
  };

  return (
    <div className="mt-4 p-4 flex flex-col justify-start items-center bg-white/60 h-[560px] rounded-2xl text-center">
      <h3 className='text-lg font-bold text-gray-800'>User List</h3>
      <table className='table-fixed w-[1000px] mt-4 border-separate border border-gray-400 bg-white/40 rounded-lg'>
        <thead>
          <tr>
            <th className='border border-gray-300'>ID</th>
            <th className='border border-gray-300'>User Name</th>
            <th className='border border-gray-300'>Role</th>
            <th className='border border-gray-300'>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className='hover:bg-pink-300/50'>
              <td className='border border-gray-300'>{user.id}</td>
              <td className='border border-gray-300'>{user.name}</td>
              <td className='border border-gray-300'>{user.role}</td>
              <td className='border border-gray-300'>
                <Button 
                  type='button' 
                  label='delete' 
                  widthBtn='100px' 
                  colorBtn='bg-pink-600' 
                  onclick={() => handleRemove(user.id)} 
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
