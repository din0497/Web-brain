import {
  BodyIcon,
  BodyStyle,
  BodyText,
  BodyWrapper,
  CarImage,
  Icon,
  Img,
  Wrapper,
} from "../Styled/Styled";
import image from "../assets/car.png";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Stats from './Stats/Stats'

const Body = (props) => {
  return (
    <Wrapper>
      <BodyStyle>
        <BodyWrapper>
          <BodyText>Infiniti Renault™</BodyText>
          <BodyIcon>
            <Icon>{<IoIosArrowBack />}</Icon>
            <Icon>{<IoIosArrowForward />}</Icon>
          </BodyIcon>
        </BodyWrapper>
        <Img src={image}/>
      </BodyStyle>
      <Stats/>
    </Wrapper>
  );
};
export default Body;
