import React from "react";
import { sales } from "./sales.js";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Visual() {

  const map = new Map();
  sales.forEach((element) => {
    const month = element.month.split(" ")[0];
    if (map.has(month)) {
      map.set(month, map.get(month) + element.sales);
    } else {
      map.set(month, element.sales);
    }
  });
  const arr = Array.from(map);

  const mp = new Map();
  sales.forEach(element => {
    if(mp.has(element.city)) {
      mp.set(element.city, mp.get(element.city) + element.sales);
    } else {
      mp.set(element.city, element.sales);
    }
  });
  const brr = Array.from(mp);


  const data = {
    labels: arr.map(([month]) => month),
    datasets: [
      {
        label: "sales",
        data: arr.map(([, sale]) => sale),
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const data2 = {
    labels: brr.map(([city]) => city),
    datasets: [
      {
        label: "sales",
        data: brr.map(([, sales]) => sales),
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  return (
    <div style={{ width: "50%", paddingLeft: "20px", paddingTop: "20px" }}>
      <Bar data={data} />
      <Bar data={data2} />
    </div>
  );
}

export default Visual;
