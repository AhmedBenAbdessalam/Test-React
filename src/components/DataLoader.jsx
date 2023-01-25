import React, { useState, useEffect } from "react";
import loadData from "../utilities/loadData";

function DataLoader() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData().then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>{data.length}</h1>
          {console.log(data)}
        </div>
      )}
    </div>
  );
}

export default DataLoader;
