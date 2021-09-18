import { Li, Text } from "../Styled/Styled";
import { Link } from "react-router-dom";

const List = (props) => {
  return (
    <Link style={{textDecoration:'none'}} to={props.link}>
      <Li>
        <div>{props.icon}</div>
        <Text>{props.text}</Text>
      </Li>
    </Link>
  );
};

export default List;
