import React from "react";
import { BallTriangle } from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className="flex justify-center items-center w-fill h-full">
      <BallTriangle />
      <p className="">{message}</p>
    </div>
  );
};

export default Spinner;
