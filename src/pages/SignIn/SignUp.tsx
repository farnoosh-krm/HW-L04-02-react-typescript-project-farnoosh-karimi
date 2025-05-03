import { useState } from "react";
import Button from "../../components/Button/Button"
import Inputs from "../../components/Inputs/Inputs"
import { AppDispatch } from "../../features/store"
import React from "react"
import { User } from "../../types/User"
import { useDispatch } from "react-redux"
import { addUser } from "../../features/users/UserSlice";



const SignUp = () => {

  const [name,setName] = useState<string>("");
  const [role,setRole] = useState<"user" | "admin">("user");
  const [password,setPassword] = React.useState<string>("");


  const dispatch = useDispatch<AppDispatch>()

  const addMemberList = ()=>{
    const newUser:User = {id:Date.now(), name, role}
    dispatch(addUser(newUser))
    setName("")
    setRole("user")
  }

  const handleSignUp =()=>{
    const users = JSON.parse(localStorage.getItem("authUsers") || '[]');
    const alreadyExist = users.some((user:any) => user.name === name);

    if(alreadyExist){
      alert("User already exists")
      return
    }

    users.push({name,password});
    localStorage.setItem("authUsers", JSON.stringify(users));
    alert("User created successfully. Please sign in first.")
  }



  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault()
    handleSignUp()
    addMemberList() 

  }



  return (
    <div className="mt-4 p-4  flex flex-row justify-center items-center h-[560px] rounded-2xl text-center">

      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold'>Sign Up</h1>

        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center mt-4'>
          <Inputs type="text" placeholder="username" value={name} focusBorderColor="#5ea500 2px solid" onchange={e=>setName(e.target.value)}/>
          <Inputs type="email" placeholder="Email" focusBorderColor="#5ea500 2px solid"/>
          <Inputs type="password" placeholder="password" focusBorderColor="#5ea500 2px solid" value={password} onchange={e=> setPassword(e.target.value)}/>

          <select className="mb-2 mt-2 bg-white w-[300px] rounded-2xl outline-0 border-0 focus:outline-0 p-2 text-sm focus:border-lime-500" value={role} onChange={e=>setRole(e.target.value as "user" | "admin")}>
            <option disabled>choose your role</option> 
            <option value="user">user</option>
            <option value="admin">admin</option>
          </select>

          <Button type="submit" label="Sign Up" widthBtn="130px" colorBtn="bg-lime-500" colorBtnText="text-gray-800" />


        </form>

      </div>




    </div>


  )
}

export default SignUp