import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register required components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
 const data = {
   labels: ["January", "February", "March", "April", "May", "June", "July"],
   datasets: [
     {
       label: "My First dataset",
       backgroundColor: "rgba(75,192,192,0.4)",
       borderColor: "rgba(75,192,192,1)",
       borderWidth: 1,
       hoverBackgroundColor: "rgba(75,192,192,0.6)",
       hoverBorderColor: "rgba(75,192,192,1)",
       data: [65, 59, 80, 81, 56, 55, 40],
     },
   ],
 };

 const options = {
   responsive: true,
   plugins: {
     legend: {
       position: "top",
     },
     title: {
       display: true,
       text: "Bar Chart Example",
     },
   },
 };

  return (
    <div style={{width : "50%", paddingLeft : "20px"}}>
      <h2>Bar Chart Example</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
