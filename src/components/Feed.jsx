import React, { useState, useEffect } from "react";
//ROUTER
import { useParams } from "react-router-dom";
//CLIENT
import { client } from "../client";
//COMPONENTS
import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";
//UTILS
import { feedQuery, searchQuery } from "../utils/data";

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);

  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      setLoading(true);
      const query = searchQuery(categoryId);

      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);

  if (loading)
    return <Spinner message="We are adding new ideas for your feed!" />;
  return <div>Feed</div>;
};

export default Feed;
