import { ItemText , Itemy} from "../../Styled/Styled";
const Item = (props) => {
  return (
    <Itemy>
      <div>{props.icon}</div>
      <ItemText>{props.text}</ItemText>
    </Itemy>
  );
};

export default Item;
