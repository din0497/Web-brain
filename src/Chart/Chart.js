import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  return (
    <div >
      <Bar
        data={{
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
          ],
          datasets: [
            {
              label: "Races",
              data: [2, 3, 1, 5, 4, 7, 1, 3, 2],
              backgroundColor: "#3629b7",
            },
          ],
        }}
        height={100}
        width={200}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
