
import Button from "../../components/Button/Button"
import Inputs from "../../components/Inputs/Inputs"


const SignIn = () => {

  return (
    <div className="p-4  flex flex-row justify-center items-center h-[560px] rounded-2xl text-center">

      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold'>Sign In</h1>

        <form className='flex flex-col justify-center items-center mt-4'>
          <Inputs type="text" placeholder="Username" focusBorderColor="#5ea500 2px solid"/>
          <Inputs type="password" placeholder="password" focusBorderColor="#5ea500 2px solid"/>

          <Button type="submit" label="Sign In" widthBtn="130px" colorBtn="bg-lime-500" colorBtnText="text-gray-800" />


        </form>

      </div>




    </div>


  )
}

export default SignIn