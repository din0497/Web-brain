import BarChart from "../Chart/Chart";
import Charts from "../Chart/Charts";
import { MainContainer } from "../Styled/Styled";
import Body from "./Body";
import Inputs from "./Inputs";
import Items from "./Items/Items";

const Main = () => {
  return (
    <MainContainer>
      <Inputs />
      <Items/>
      <Body/>
      <Charts/>
    </MainContainer>
  );
};
export default Main;
