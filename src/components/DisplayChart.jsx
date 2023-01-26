import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const DisplayChart = ({ data }) => {
  if (!data.length) return <p>No data to display</p>;

  const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload.length) return null;
    if (active) {
      return (
        <div
          style={{
            backgroundColor: "#eeeeee",
            color: "#8884d8",
          }}
        >
          <p>ID: {payload[0].payload.id}</p>
          <p>Code: {payload[0].payload.code}</p>
          <p>Value: {payload[0].value}</p>
          <p>Date: {payload[0].payload.date}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="code" />
      <YAxis />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <Tooltip content={<CustomTooltip />} />
    </LineChart>
  );
};

export default DisplayChart;
