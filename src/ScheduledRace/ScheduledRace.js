import { Ul, H4 } from "../Styled/Styled";
import List from "../Menu/List";
import { BsCircle } from "react-icons/bs";

const ScheduledRace = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingLeft: "1.83vw",
      }}
    >
      <H4>Scheduled Race</H4>
      <Ul>
        <List icon={<BsCircle color="#3F7EF8" />} text="MotorGp 2022" />
        <List icon={<BsCircle color="#FA6C6A" />} text="Dynamic 22" />
        <List icon={<BsCircle color="#27C1B3" />} text="Olimpics" />
      </Ul>
    </div>
  );
};
export default ScheduledRace;
