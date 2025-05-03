import React, { useState } from "react";
import Button from "../../components/Button/Button";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const AccountInfo: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(true); // دیفالت روی ورود هست

  const handleSignIn = (): void => {
    setIsSignIn(true);
  };

  const handleSignUp = (): void => {
    setIsSignIn(false);
  };

  return (
    <div className="mt-4 p-4 flex flex-row justify-center items-center h-[560px] rounded-2xl text-center">
      <div className="h-[530px] w-[500px] bg-white/50 rounded-2xl shadow-2xl flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center mt-4">
          <Button
            type="button"
            label="Sign In"
            widthBtn="100px"
            colorBtn="bg-white"
            colorBtnText="text-gray-800"
            onclick={handleSignIn}
          />
          <Button
            type="button"
            label="Sign Up"
            widthBtn="100px"
            colorBtn="bg-white"
            colorBtnText="text-gray-800"
            onclick={handleSignUp}
          />
        </div>

        {/* تغییر کامپوننت */}
        {isSignIn ? <SignIn /> : <SignUp />} 
      </div>
    </div>
  );
};

export default AccountInfo;
