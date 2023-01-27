import _ from "lodash";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DisplayChart = ({ aggregatedData, xKey }) => {
  if (!aggregatedData) return null;
  const key = JSON.stringify(aggregatedData);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const minValue = _.minBy(aggregatedData, "value")?.value || 0;
  const CustomizedDot = (props) => {
    const { cx, cy, stroke, payload, value } = props;

    if (value < 100) {
      return <circle cx={cx} cy={cy} r={2} fill="red" />;
    }
  };
  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div
          style={{
            backgroundColor: "#eeeeee",
            color: "#8884d8",
          }}
        >
          {payload[0].payload.id && <p>ID: {payload[0].payload.id}</p>}
          {payload[0].payload.code && <p>Code: {payload[0].payload.code}</p>}

          {payload[0].value && (
            <p>Value: {Math.round(payload[0].value * 100) / 100}</p>
          )}
          {payload[0].payload.date && <p>Date: {payload[0].payload.date}</p>}
        </div>
      );
    }
    return null;
  };

  return (
    <div key={key} className="flex justify-center">
      <div className="w-full max-w-screen-lg">
        <div className=" overflow-hidden w-full h-auto mx-auto my-auto p-4">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={aggregatedData} className="flex content-center">
              {xKey === "code" ? (
                <XAxis
                  dataKey={xKey}
                  angle={-45}
                  textAnchor="end"
                  className="text-gray-700"
                />
              ) : (
                <XAxis
                  dataKey={xKey}
                  angle={-45}
                  textAnchor="end"
                  interval={0}
                  tickFormatter={
                    xKey === "year" ? null : (tick) => monthNames[tick]
                  }
                  className="text-gray-700"
                />
              )}

              <YAxis
                domain={[minValue, "dataMax"]}
                tickFormatter={(tick) => Math.round(tick * 100) / 100}
                className="text-gray-700"
              />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                dot={<CustomizedDot />}
              />
              <Tooltip content={<CustomTooltip />} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DisplayChart;
