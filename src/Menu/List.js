import { Li,Text } from "../Styled/Styled";

const List = (props) => {
  return (
    <Li>
      <div>{props.icon}</div>
      <Text>{props.text}</Text>
    </Li>
  );
};

export default List;
