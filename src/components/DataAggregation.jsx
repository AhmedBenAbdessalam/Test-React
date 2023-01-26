import React, { useState } from "react";

function DataAggregation({ data, setData, setXAxis }) {
  const [aggregationType, setAggregationType] = useState("code");

  const handleOptionChange = (event) => {
    setAggregationType(event.target.value);
    if (event.target.value === "code") {
      setXAxis("code");
      setData(data);
    } else if (event.target.value === "year") {
      setXAxis("year");
      setData(aggregateByYear(data));
    } else if (event.target.value === "month") {
      setXAxis("month");
      setData(aggregateByMonth(data));
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
    <div>
      <form>
        <label>
          <input
            type="radio"
            value="code"
            checked={aggregationType === "code"}
            onChange={handleOptionChange}
          />
          Code
        </label>
        <label>
          <input
            type="radio"
            value="year"
            checked={aggregationType === "year"}
            onChange={handleOptionChange}
          />
          Year
        </label>
        <label>
          <input
            type="radio"
            value="month"
            checked={aggregationType === "month"}
            onChange={handleOptionChange}
          />
          Month
        </label>
      </form>
    </div>
  );
}

export default DataAggregation;
