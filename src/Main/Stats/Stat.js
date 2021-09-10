import { Div, Icon, Num, StatWrapper, Text} from "./StatStyle";
const Stat = (props) => {
  return (
    <StatWrapper>
      <Icon color={props.color}>{props.icon}</Icon>
      <Div>
        <Num>{props.num}</Num>
        <Text>{props.text}</Text>
      </Div>
    </StatWrapper>
  );
};

export default Stat;
