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
    </MainContainer>
  );
};
export default Main;
