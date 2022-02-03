import React, { useState, useEffect } from "react";
//COMPONENTS
import { MasonryLayout, Spinner } from ".";
//CLIENT
import { client } from "../client";
//UTILS
import { feedQuery, searchQuery } from "../utils/data";

const Search = ({ searchTerm }) => {
  const [pins, setPins] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      setLoading(true);
      const query = searchQuery(searchTerm.toLowerCase());

      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      client.fetch(feedQuery).then((data) => setPins(data));
      setLoading(false);
    }
  }, [searchTerm]);

  return (
    <div>
      {loading && <Spinner message="Searching for pins!" />}
      {pins?.length !== 0 && <MasonryLayout pins={pins} />}
      {pins?.length === 0 && searchTerm !== "" && !loading && (
        <div className="mt-10 text-center text-xl">No pins found...</div>
      )}
    </div>
  );
};

export default Search;
