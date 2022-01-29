import React, { useState, useEffect } from "react";
//ROUTER
import { useParams } from "react-router-dom";
//CLIENT
import { client } from "../client";
//COMPONENTS
import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";

const Feed = () => {
  const [loading, setLoading] = useState(true);

  if (loading)
    return <Spinner message="We are adding new ideas for your feed!" />;
  return <div>Feed</div>;
};

export default Feed;
