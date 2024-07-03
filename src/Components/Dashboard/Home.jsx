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
      <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  ">
        <div>
          <Card title="Active Orders" icon={<FaShoppingBag />} value={50} />
        </div>
        <div>
          <Card
            title="Monthly Revenue"
            icon={<CiMoneyBill />}
            value={5000}
            currencySign="$"
          />
        </div>
        <div>
          <Card title="Completed Orders" icon={<FaTruck />} value={150} />
        </div>
        <div>
          <Card title="Canceled Orders" icon={<FcCancel />} value={15} />
        </div>
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
