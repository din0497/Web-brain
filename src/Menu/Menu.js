import { AiOutlineHome } from "react-icons/ai";
import { FaBorderAll } from "react-icons/fa";
import { GoCreditCard } from "react-icons/go";
import { FiUsers, FiSettings } from "react-icons/fi";
import { RiCalculatorLine } from "react-icons/ri";
import { H4, MenuWrapper, Ul } from "../Styled/Styled";
import List from "./List";

const Menu = () => {
  return (
    <MenuWrapper>
      <H4>Menu</H4>
      <Ul>
        <List icon={<AiOutlineHome />} link='/home' text="Home" />
        <List icon={<FaBorderAll />} link='/garage' text="Garage" />
        <List icon={<GoCreditCard />} link='/service' text="Service Menu" />
        <List icon={<FiUsers />} link='/racers' text="Racers" />
        <List icon={<RiCalculatorLine />} link='/calculator' text="Calculator" />
        <List icon={<FiSettings />} link='/settings' text="Settings" />
      </Ul>
    </MenuWrapper>
  );
};

export default Menu;
