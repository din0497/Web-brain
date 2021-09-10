import { VscBellDot } from "react-icons/vsc";
import { AiOutlineUser } from "react-icons/ai";
import img from "../assets/user.png";

const Inputs = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        padding: "24px",
        borderBottom: "#F2F2F2 solid 2px",
      }}
    >
      <input
        type="search"
        placeholder="Search for a race, car or racer"
        style={{
          width: "517px",
          height: "50px",
          padding: "25px",
          borderColor: "#E7E7E7",
          outline: "none",
        }}
      />
      <select
        style={{
          width: "310px",
          height: "50px",
          marginLeft: "34px",
          padding: "10px",
          borderColor: "#E7E7E7",
          outline: "none",
        }}
      >
        <option>Choose a car</option>
      </select>
      <div
        style={{
          width: "180px",
          display: "flex",
          height: "50px",
          alignItems: "center",
          marginLeft: "60px",
          justifyContent: "space-between",
        }}
      >
        <VscBellDot size="22px" />
        <AiOutlineUser size="22px" />
        <img src={img} alt="user" style={{ width: "26px", height: "26px" }} />
      </div>
    </div>
  );
};
export default Inputs;
