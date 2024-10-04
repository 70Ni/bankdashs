import { AgGridReact, AgGridColumn } from "ag-grid-react";
import React, { useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-quartz.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
// import "../../node_modules/ag-grid-community/styles/ag-theme-quartz.css";
// import "../../node_modues/ag-grid-community/styles/ag-grid.css";
function Table() {
  const [rowData, setRowData] = useState([
    {
      SlNO: "01.",
      Name: "Trivago",
      Price: "$520",
      Return: "+5%",
    },
    { SlNO: "02.", Name: "Canon", Price: "$480", Return: "+10%" },
    { SlNO: "03.", Name: "Uber Food", Price: "$350", Return: "-3%" },
    { SlNO: "04.", Name: "Nokia", Price: "$940", Return: "+2%" },
    { SlNO: "05.", Name: "Tiktok", Price: "$670", Return: "-12%" },
  ]);

  const [colDefs, setColDefs] = useState([
    { field: "SlNO" },
    { field: "Name" },
    { field: "Price" },
    { field: "Return" },
  ]);
  return (
    <div
      className="ag-theme-quartz ag-root"
      style={{ height: 400, width: "100%" }}
    >
      {/* <AgGridReact rowData={rowData} columnDefs={colDefs} /> */}
      <div className="flex">
        {/* {colDefs.map((x) => {
          return (
         
          );
        })} */}
      </div>
      {rowData.map((x) => {
        return <div className="row p-3">{x.Name}</div>;
      })}
    </div>
  );
}

export default Table;
