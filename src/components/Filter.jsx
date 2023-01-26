import React, { useState, useEffect } from "react";

const Filter = ({ data, setFilteredData }) => {
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const filteredData = data.filter(
      (item) => item.id.includes(filter) || item.code.includes(filter)
    );
    setFilteredData(filteredData);
  }, [data, filter]);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const handleClear = (event) => {
    event.preventDefault();
    setFilter("");
    setFilteredData(data);
  };

  return (
    <form className="p-6 flex justify-center items-baseline">
      <label className=" flex-2 block font-medium text-gray-700 mb-2 max-w-xs w-full text-left">
        Filter by ID or Code:
      </label>
      <div class="  flex-1 flex items-baseline ">
        <input
          className=" max-w-xs w-full h-10 border border-gray-400 p-2 rounded-lg"
          type="text"
          value={filter}
          onChange={handleChange}
        />
        <button
          className=" ml-8 px-8  text-md h-10 bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default Filter;
