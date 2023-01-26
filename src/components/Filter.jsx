import React, { useState, useEffect } from "react";

function Filter({ data, setFilteredData }) {
  const [filter, setFilter] = useState("");
  useEffect(() => {
    handleClear();
  }, [data]);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredData = data.filter(
      (item) => item.id.includes(filter) || item.code.includes(filter)
    );
    setFilteredData(filteredData);
  };

  const handleClear = () => {
    setFilter("");
    setFilteredData(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Filter by ID or Code:
        <input type="text" value={filter} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
      <button onClick={handleClear}>Clear</button>
    </form>
  );
}

export default Filter;
