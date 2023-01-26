import React, { useEffect, useState } from "react";

const DataAggregation = ({
  filteredData,
  setAggregatedData,
  xKey,
  setXKey,
}) => {
  const [aggregationType, setAggregationType] = useState("code");
  useEffect(() => {
    if (xKey === "code") {
      setAggregatedData(filteredData);
    } else if (xKey === "year") {
      setAggregatedData(aggregateByYear(filteredData));
    } else if (xKey === "month") {
      setAggregatedData(aggregateByMonth(filteredData));
    }
  }, [filteredData, aggregationType]);
  const handleOptionChange = (event) => {
    setAggregationType(event.target.value);
    if (event.target.value === "code") {
      setXKey("code");
      setAggregatedData(filteredData);
    } else if (event.target.value === "year") {
      setXKey("year");
      setAggregatedData(aggregateByYear(filteredData));
    } else if (event.target.value === "month") {
      setXKey("month");
      setAggregatedData(aggregateByMonth(filteredData));
    }
  };

  const aggregateByYear = (data) => {
    const aggregatedData = data.reduce((acc, curr) => {
      const year = new Date(curr.date).getFullYear();
      if (!acc[year]) {
        acc[year] = { year: year, value: 0, count: 0 };
      }
      acc[year].value += curr.value;
      acc[year].count += 1;
      return acc;
    }, {});
    return Object.values(aggregatedData).map((d) => {
      d.value = d.value / d.count;
      return d;
    });
  };

  const aggregateByMonth = (data) => {
    const aggregatedData = data.reduce((acc, curr) => {
      const month = new Date(curr.date).getMonth();
      if (!acc[month]) {
        acc[month] = { month: month, value: 0, count: 0 };
      }
      acc[month].value += curr.value;
      acc[month].count += 1;
      return acc;
    }, {});
    return Object.values(aggregatedData).map((d) => {
      d.value = d.value / d.count;
      return d;
    });
  };

  return (
    <form className=" flex p-6">
      <label className="max-w-xs w-full text-left flex-2 block font-medium text-gray-700 mb-2">
        Select Aggregation Type:
      </label>
      <div className=" flex-1 flex items-center ">
        <label className=" block font-medium text-gray-700 mr-10 ">
          <input
            type="radio"
            value="code"
            checked={aggregationType === "code"}
            onChange={handleOptionChange}
            className="form-radio mr-2"
          />
          Code
        </label>
        <label className=" block font-medium text-gray-700 mr-10 ">
          <input
            type="radio"
            value="year"
            checked={aggregationType === "year"}
            onChange={handleOptionChange}
            className="form-radio mr-2"
          />
          Year
        </label>
        <label className=" block font-medium text-gray-700 ">
          <input
            type="radio"
            value="month"
            checked={aggregationType === "month"}
            onChange={handleOptionChange}
            className="form-radio mr-2"
          />
          Month
        </label>
      </div>
    </form>
  );
};

export default DataAggregation;
