import React, { useState } from "react";
import DataAggregation from "./DataAggregation";
import DataLoader from "./DataLoader";
import DisplayChart from "./DisplayChart";
import Filter from "./Filter";

const Chart = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [aggregatedData, setAggregatedData] = useState([]);
  const [xKey, setXKey] = useState("code"); // added state for xKey

  return (
    <div className="mx-auto max-w-screen-lg">
      <div className="card rounded-lg shadow-lg py-4 px-6">
        <DataLoader setData={setData} />
        <div className="flex flex-col pl-14">
          <Filter data={data} setFilteredData={setFilteredData} />
          <DataAggregation
            filteredData={filteredData}
            setAggregatedData={setAggregatedData}
            xKey={xKey}
            setXKey={setXKey}
          />
        </div>
        <DisplayChart aggregatedData={aggregatedData} xKey={xKey} />
      </div>
    </div>
  );
};

export default Chart;
