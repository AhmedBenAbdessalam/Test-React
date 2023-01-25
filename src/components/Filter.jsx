import { useState, useCallback } from "react";
import { debounce } from "lodash";

function Filter({ data, setFilteredData }) {
  const [filter, setFilter] = useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const debouncedHandleSubmit = useCallback(
    debounce((filter) => {
      const filteredData = data.filter(
        (item) => item.id.includes(filter) || item.code.includes(filter)
      );
      setFilteredData(filteredData);
    }, 300),
    []
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    debouncedHandleSubmit(filter);
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
