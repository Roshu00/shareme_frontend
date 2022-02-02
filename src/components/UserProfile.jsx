import React, { useState, useEffect } from "react";
//ICONS
import { AiOutlineLogout } from "react-icons/ai";
//ROUTER
import { useParams, useNavigate } from "react-router-dom";
//GOOGLE LOGOUT
import { GoogleLogout } from "react-google-login";
//UTILS
import {
  userCreatedPinsQuery,
  userQuery,
  userSavedPinsQuery,
} from "../utils/data";
//CLIENT
import { client } from "../client";
//COMPONENTS
import { MasonryLayout, Spinner } from ".";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [pins, setPins] = useState(null);
  const [text, setText] = useState("Created");
  const [activeBtn, setActiveBtn] = useState("created");
  const navigate = useNavigate();
  const { userId } = useParams();

  if (!user) {
    return <Spinner message="Loading profile!" />;
  }
  return <div>USERPROFILE</div>;
};

export default UserProfile;
