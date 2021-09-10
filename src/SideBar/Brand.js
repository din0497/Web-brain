import img from "../assets/brand.png";
const Brand = (props) => {
  return (
    <div style={{ display: "flex", alignItems: "center", marginLeft: "15px"}}>
      <img src={img} style={{ width: "26px", height: "26px", marginRight:'10px' }} />
      <h3>iffee</h3>
    </div>
  );
};
export default Brand;
