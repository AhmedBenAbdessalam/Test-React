import React, { useState, useEffect } from "react";
import loadData from "../utilities/loadData";

function DataLoader({ setData }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData("data/random_data.csv").then((data) => {
      setData(data.filter((d) => d.id && d.code && d.value && d.date));
      setLoading(false);
    });
  }, []);
  return <div>{loading ? <p>Loading...</p> : <div></div>}</div>;
}

export default DataLoader;
