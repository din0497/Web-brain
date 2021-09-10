import img from "../assets/user.png";
const Select = (props) => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#F9FAFF",
        flexDirection: "row",
        padding: "20px",
        width: "60px",
        justifyContent: "space-between",
        marginLeft: "15px",
      }}
    >
      <img src={img} style={{ width: "26px", height: "26px" }} />
      <select
        style={{
          color: "#3629B7",
          border: "none",
          outline: "none",
        }}
      >
        <option>Killua</option>
      </select>
    </div>
  );
};
export default Select;
