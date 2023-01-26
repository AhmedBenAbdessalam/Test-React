import React, { useState } from "react";
import DataAggregation from "./DataAggregation";
import DataLoader from "./DataLoader";
import DisplayChart from "./DisplayChart";
import Filter from "./Filter";

const Chart = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [xKey, setXKey] = useState("code"); // added state for xKey

  return (
    <div>
      <DataLoader setData={setData} />
      <DataAggregation data={data} setData={setData} setXKey={setXKey} />
      <Filter data={data} setFilteredData={setFilteredData} />
      <DisplayChart data={filteredData} xKey={xKey} />
    </div>
  );
};

export default Chart;
