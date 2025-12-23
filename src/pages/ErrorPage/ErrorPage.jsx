import React from "react";
import errorImg from "../../assets/error-404.png";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="w-10/12 mx-auto mt-20">
      <div className="flex justify-center items-center">
        <img className="w-[50%] lg:w-[30%]" src={errorImg} alt="" />
      </div>
      <div className="text-center mt-5 space-y-2">
        <p className="text-3xl md:text-4xl font-bold">Oops, page not found!</p>
        <p className="text-gray-500">
          The page you are looking for is not available.
        </p>
        <button
            onClick={handleGoHome}
          className="btn bg-gradient-to-r from-lime-400 to-lime-300 font-bold mt-5"
        >
          Go Home!
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
