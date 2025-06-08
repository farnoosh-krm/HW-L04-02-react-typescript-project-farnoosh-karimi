import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../features/auth/authSlice";

const ProfileInfo = () => {
  const user = useSelector((state: RootState) => state.auth.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!user) {
    return <div className="text-red-500">User not Sign in</div>;
  }

  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <div className="mt-4 p-4 flex flex-col justify-start items-center bg-white/60 h-[560px] rounded-2xl text-center">
      <h2 className="text-2xl font-bold mb-8">User Information</h2>

      <p className="mb-2">
        <strong className="mr-4">Username:</strong>
        {user.name}
      </p>
      <p className="mb-6">
        <strong className="mr-4">Password:</strong>
        {user.password}
      </p>

      <Button
        type="button"
        label="Sign Out"
        widthBtn="200px"
        colorBtn="bg-red-500"
        onclick={handleLogOut}
      />
    </div>
  );
};

export default ProfileInfo;
