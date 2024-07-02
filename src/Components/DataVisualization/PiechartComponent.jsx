import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import { ordersData } from "./data";
export const PiechartComponent = () => {
  const transformDataForChart = (data) => {
    const regionCounts = {};
    data.forEach((order) => {
      const { Region } = order;
      if (regionCounts[Region]) {
        regionCounts[Region]++;
      } else {
        regionCounts[Region] = 1;
      }
    });
    return Object.keys(regionCounts).map((region) => ({
      name: region,
      value: regionCounts[region],
    }));
  };
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const transformedData = transformDataForChart(ordersData);
    setChartData(transformedData);
  }, []);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];
  return (
    <div>
      <div className="text-[50px] text-center">Quantity by SKU</div>
      <div>
        <PieChart width={400} height={400}>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};
