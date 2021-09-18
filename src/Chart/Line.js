import React from "react";
import { Line } from "react-chartjs-2";

const Graph = () => {
  return (
    <div style={{width:'60vw'}}>
      <Line
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
              label: "Engine Performance",
              data: [2, 3, 1, 5, 4, 7, 1, 3, 2],
              backgroundColor: "red",
            },
          ],
        }}
        height={200}
        width={300}
        options={{
            maintainAspectRatio: false,
           
        }}
      />
    </div>
  );
};

export default Graph;
