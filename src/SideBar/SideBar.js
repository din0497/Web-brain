import Menu from "../Menu/Menu";
import ScheduledRace from "../ScheduledRace/ScheduledRace";
import { SidebarContainer, H4 } from "../Styled/Styled";
import Brand from "./Brand";
import Select from "./Select";

const SideBar = (props) => {
  return (
    <SidebarContainer>
      <Brand/>
      <Menu />
      <ScheduledRace/>
      <Select/>
    </SidebarContainer>
  );
};
export default SideBar
