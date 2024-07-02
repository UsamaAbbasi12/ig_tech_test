import React from "react";
import { Card } from "../cards/Card";
import { FaShoppingBag } from "react-icons/fa";
import { CiMoneyBill } from "react-icons/ci";
import { FaTruck } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";
import { Chart } from "../DataVisualization/Chart";
import { PiechartComponent } from "../DataVisualization/PiechartComponent";
function Home() {
  return (
    <div>
      <div className="flex gap-3 flex-wrap">
        <Card title="Active Orders" icon={<FaShoppingBag />} value={50} />
        <Card
          title="Monthly Revenue"
          icon={<CiMoneyBill />}
          value={5000}
          currencySign="$"
        />
        <Card title="Completed Orders" icon={<FaTruck />} value={150} />
        <Card title="Canceled Orders" icon={<FcCancel />} value={15} />
      </div>
      <div className="mt-12 flex sm:flex-col md:flex-row flex-wrap">
        <div className="border sm:w-[100%] md:w-[50%] p-5">
          <Chart />
        </div>
        <div className="border sm:w-[100%] md:w-[50%] p-5 flex justify-center">
          <PiechartComponent />
        </div>
      </div>
    </div>
  );
}

export default Home;
