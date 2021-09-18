import img from "../assets/brand.png";
import { BrandWrapper } from "../Styled/Styled";
const Brand = (props) => {
  return (
    < BrandWrapper>
      <img
        src={img}
        style={{ width: "2vw", height: "2vw", marginRight: "1vw" }}
      />
      <h3 style={{ fontSize: "2vw" }}>iffee</h3>
    </BrandWrapper>
  );
};
export default Brand;
