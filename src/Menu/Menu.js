import { AiOutlineHome } from "react-icons/ai";
import { FaBorderAll } from "react-icons/fa";
import { GoCreditCard } from "react-icons/go";
import { FiUsers, FiSettings } from "react-icons/fi";
import { RiCalculatorLine } from "react-icons/ri";
import { H4, Ul } from "../Styled/Styled";
import List from "./List";

const Menu = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", paddingLeft: "25px" }}
    >
      <H4>Menu</H4>
      <Ul>
        <List icon={<AiOutlineHome />} text="Home" />
        <List icon={<FaBorderAll />} text="Garage" />
        <List icon={<GoCreditCard />} text="Service Menu" />
        <List icon={<FiUsers />} text="Racers" />
        <List icon={<RiCalculatorLine />} text="Calculator" />
        <List icon={<FiSettings />} text="Settings" />
      </Ul>
    </div>
  );
};

export default Menu;
