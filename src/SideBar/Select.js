import img from "../assets/user.png";
import { SelectWrapper } from "../Styled/Styled";
const Select = (props) => {
  return (
    <SelectWrapper>
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
    </SelectWrapper>
  );
};
export default Select;
