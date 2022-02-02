import React, { useState, useEffect } from "react";
//ICONST
import { MdDownloadForOffline } from "react-icons/md";
//ROUTER
import { Link, useParams } from "react-router-dom";
//UUid
import { v4 as uuidv4 } from "uuid";
//CLIENT
import { client, urlFor } from "../client";
//COMPONENTS
import Spinner from "./Spinner";
import MasonryLayout from "./MasonryLayout";
//UTILS
import { pinDetailMorePinQuery, pinDetailQuery } from "../utils/data";

const PinDetail = ({ user }) => {
  const [pins, setPins] = useState(null);
  const [pinDetail, setPinDetail] = useState(null);
  const [comment, setComment] = useState("");
  const [addingComment, setAddingComment] = useState(false);
  const { pinId } = useParams();

  if (!pinDetail) return <Spinner message="Loading Pin details" />;

  return <div>Details</div>;
};

export default PinDetail;
