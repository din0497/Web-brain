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
          width: "37.84773060029283vw",
          height: "5vw",
          padding: "0.7vw",
          borderColor: "#E7E7E7",
          outline: "none",
        }}
      />
      <select
        style={{
          width: "22.693997071742313vw",
          height: "5vw",
          marginLeft: "34px",
          padding: "0.7vw",
          borderColor: "#E7E7E7",
          outline: "none",
        }}
      >
        <option>Choose a car</option>
      </select>
      <div
        style={{
          width: "13.177159590043924vw",
          display: "flex",
          height: "4.0096230954290295vw",
          alignItems: "center",
          marginLeft: "5vw",
          justifyContent: "space-between",
        }}
      >
        <VscBellDot size="22px" cursor='pointer'/>
        <AiOutlineUser size="22px" cursor='pointer' />
        <img src={img} alt="user"  style={{ width: "26px", height: "26px", cursor:'pointer' }} />
      </div>
    </div>
  );
};
export default Inputs;
