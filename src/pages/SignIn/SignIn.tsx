
import React, { useState } from "react"
import Button from "../../components/Button/Button"
import Inputs from "../../components/Inputs/Inputs"
import { useNavigate } from "react-router-dom";
import { signIn } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../features/store";


const SignIn:React.FC = () => {

  const [name,setName] = React.useState<string>("");
  const [password,setPassword] = React.useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>()


  const handleSubmit =(e:React.FormEvent)=>{
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("authUsers") || '[]');
    const userMatch = users.find((user:any) => user.name === name && user.password === password);

    if (userMatch) {
      dispatch(signIn({ name: userMatch.name, password: userMatch.password }));
      navigate("/home");
    }
    
    else{
      alert("Invalid username or password")
    }

  }

  return (
    <div className="p-4  flex flex-row justify-center items-center h-[560px] rounded-2xl text-center">

      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold'>Sign In</h1>

        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center mt-4'>
          <Inputs type="text" placeholder="Username" focusBorderColor="#5ea500 2px solid" value={name} onchange={e=> setName(e.target.value)}/>
          <Inputs type="password" placeholder="password" focusBorderColor="#5ea500 2px solid" value={password} onchange={e=> setPassword(e.target.value)}/>

          <Button type="submit" label="Sign In" widthBtn="130px" colorBtn="bg-lime-500" colorBtnText="text-gray-800" />


        </form>

      </div>

    </div>


  )
}

export default SignIn