import React, { useState } from "react";
//ICONS
import { AiOutlineCloudUpload } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
//ROUTER
import { useNavigate } from "react-router-dom";
//CLIENT
import { client } from "../client";
//SPINER
import Spinner from "./Spinner";
//UTILS
import { categories } from "../utils/data";

const CreatePin = ({ user }) => {
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [destination, setDestination] = useState("");
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState(false);
  const [categoty, setCategoty] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [wrongImageType, setWrongImageType] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center flex-col mt-5 lg:h4/5">
      {fields && (
        <p className="text-red-500 md-5 text-xl transition-all duration-150 ease-in">
          Please input the fields
        </p>
      )}{" "}
      <div className="flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3 lg:w-5/4 w-full">
        <div className="bg-secondaryColor p-3 flex flex-0.7 w-full">
          <div className="flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-420">
            {loading && <Spinner />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePin;
