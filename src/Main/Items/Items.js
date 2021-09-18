import Item from "./Item";
import { ImKey2 } from "react-icons/im";
import { GiSteeringWheel, GiBatteryPackAlt, GiCarWheel } from "react-icons/gi";
import { AiTwotoneSetting, AiFillLock } from "react-icons/ai";
import { WrapperGrid } from "../../Styled/Styled";

const Items = () => {
  return (
    <WrapperGrid>
      <Item text="Start" icon={<ImKey2 color="#3629b7" size="22px" />} />
      <Item
        text="Drive"
        icon={<GiSteeringWheel color="#3629b7" size="22px" />}
      />
      <Item
        text="Maintinance"
        icon={<AiTwotoneSetting color="#3629b7" size="22px" />}
      />
      <Item
        text="Battery"
        icon={<GiBatteryPackAlt color="#3629b7" size="22px" size="22px" />}
      />
      <Item text="Tires" icon={<GiCarWheel color="#3629b7" size="22px" />} />
      <Item text="Lock" icon={<AiFillLock color="#3629b7" size="22px" />} />
    </WrapperGrid>
  );
};

export default Items;
