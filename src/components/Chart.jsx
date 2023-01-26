import React, { useState } from "react";
import DataLoader from "./DataLoader";
import DisplayChart from "./DisplayChart";
import Filter from "./Filter";

const Chart = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  return (
    <div>
      <DataLoader setData={setData} />
      <Filter data={data} setFilteredData={setFilteredData} />
      <DisplayChart data={filteredData} />
    </div>
  );
};

export default Chart;
