import BarChart from "./Chart";

const Charts = () => {
  return (
    <div style={{ width: "40vw", height: "10vw" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4>Races</h4>
        <select style={{ width: "10vw", height: "2vw", border: "none" }}>
          <option>This Year</option>
        </select>
      </div>
      <div style={{display:'flex', flexDirection:'row'}}>
        <div style={{marginRight:'16vw'}}>
          <h4>48</h4>
          <div>Icon</div>
        </div>
        <BarChart />
      </div>
    </div>
  );
};

export default Charts;
