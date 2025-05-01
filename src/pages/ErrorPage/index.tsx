import React from "react";
import errorPage from "../../images/error.jpg"

const ErrorPage: React.FC = () => {
  

  return (
      <div className="flex flex-col items-center justify-start mt-8">
        <h1 className="text-3xl font-bold text-gray-800">OOPS!!</h1>
        <h3 className="text-2xl font-bold text-gray-800 mt-8">Error 404!!</h3>
        <h3 className="text-2xl font-bold text-gray-800">Page Not Found</h3>
        <img className="h-[350px] w-[350px] rounded-[50%] mt-6" src={errorPage} alt="error page" />
      </div>
  );
};

export default ErrorPage;
