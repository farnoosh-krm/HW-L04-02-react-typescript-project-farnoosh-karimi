import Button from "../../components/Button/Button"
import Inputs from "../../components/Inputs/Inputs"


const SignIn = () => {
  return (
    <div className="mt-4 p-4  flex flex-row justify-center items-center bg-white/60 h-[560px] rounded-2xl text-center">

      <div className='h-[530px] w-[500px] bg-white/30 rounded-2xl shadow-2xl flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold'>Sign In</h1>

        <form className='flex flex-col justify-center items-center mt-4'>
          <Inputs type="text" placeholder="username" focusBorderColor="#5ea500 2px solid" />
          <Inputs type="email" placeholder="Email" focusBorderColor="#5ea500 2px solid"/>
          <Inputs type="text" placeholder="First Name" focusBorderColor="#5ea500 2px solid"/>
          <Inputs type="text" placeholder="Last Name" focusBorderColor="#5ea500 2px solid"/>
          <Inputs type="text" placeholder="Phone Number" focusBorderColor="#5ea500 2px solid"/>
          <Inputs type="password" placeholder="password" focusBorderColor="#5ea500 2px solid"/>

          <Button type="submit" label="Sign In" widthBtn="130px" colorBtn="bg-lime-500" colorBtnText="text-gray-800" />


        </form>

      </div>




    </div>


  )
}

export default SignIn