import React from "react";
import { Card } from "../cards/Card";
import { HiDocumentReport } from "react-icons/hi";
import { TbReport } from "react-icons/tb";
import { PiechartComponent } from "../DataVisualization/PiechartComponent";
function Reports() {
  return (
    <div>
      <div>
        <h1 className="text-[40px] text-center">Total Over View</h1>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-2">
        <div>
          <Card
            title="Reports Generated"
            value={10}
            icon={<HiDocumentReport />}
          />
        </div>
        <div>
          <Card title="Recent Report" value="Download" icon={<TbReport />} />
        </div>
      </div>
      <h1 className="text-[30px] text-center">Generate Reports</h1>
      <div className="mt-4 grid sm:grid-cols-1 lg:grid-cols-2">
        <div>
          <div>
            <PiechartComponent />
          </div>
        </div>
        <div className="p-12">
          <div className="my-4">
            <div className="mb-2">
              <label htmlFor="region">Region:</label>
            </div>

            <select className="w-[100%] p-2 rounded outline-none border-none">
              <option>US</option>
              <option>EU</option>
              <option>SA</option>
            </select>
          </div>
          <div className="my-2">
            <div className="mb-2">
              <label htmlFor="region">Date:</label>
            </div>

            <div>
              <input
                type="date"
                name=""
                id=""
                className="w-[100%] p-2 rounded outline-none border-none"
              />
            </div>
          </div>
          <div className="my-4">
            <div className="mb-2">
              <label htmlFor="region">Format:</label>
            </div>

            <select className="w-[100%] p-2 rounded outline-none border-none">
              <option>PDF</option>
              <option>EXCEL</option>
              <option>CSV</option>
            </select>
          </div>
          <div className="flex justify-center">
            <button className="mt-12 bg-slate-200 px-12 py-2 rounded-lg font-bold">
              Generate Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
