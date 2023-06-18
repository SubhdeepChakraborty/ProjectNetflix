import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <div className="m-5 p-5 shadow-lg">
      <h3 className="mb-5 text-[Sen] font-bold">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#3A1078" />
          <Line type="monotone" dataKey={dataKey} stroke="#3A1078" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
