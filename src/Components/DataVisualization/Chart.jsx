import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { ordersData } from "./data";
export const Chart = () => {
  const transformDataForChart = (data) => {
    const skuQuantities = {};
    data.forEach((order) => {
      const { SKU, Quantity } = order;
      if (skuQuantities[SKU]) {
        skuQuantities[SKU] += Quantity;
      } else {
        skuQuantities[SKU] = Quantity;
      }
    });
    // Transform data into array of objects with 'name' and 'quantity' properties
    return Object.keys(skuQuantities).map((SKU) => ({
      name: SKU,
      quantity: skuQuantities[SKU],
    }));
  };
  const [chartData, setChartData] = useState([]);

  // Assume 'orders' is your dataset
  useEffect(() => {
    // Transform data into chart-compatible format
    const transformedData = transformDataForChart(ordersData);
    setChartData(transformedData);
  }, []);
  console.log(chartData);
  return (
    <div>
      <div className="text-[50px] text-center">Quantity by SKU</div>
      <div>
        <BarChart
          width={800}
          height={400}
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="quantity" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};
