import React from "react";
import styled from "styled-components";
// import image from "../assets/car.png";

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  padding: 0;
  margin-top: -5px;
`;
export const Li = styled.li`
  cursor: pointer;
  &:hover {
    color: #3629b7;
  }
  color: #838383;
  list-style-type: none;
  margin-bottom: 30px;
  align-items: center;
  display: flex;
`;

export const Text = styled.div`
  margin-left: 15px;
  @media (max-width: 510px) {
    display: none;
  }
`;

export const SidebarContainer = styled.div`
  width: 20vw;
  background-color: white;
  flex-wrap: wrap;
  @media (max-width: 510px) {
    width: 20px;
  }
`;

export const H4 = styled.h4`
  /* width:200px; */
  color: #3629b7;
  /* margin: 20px 0 0 35px; */
  @media (max-width: 510px) {
    display: none;
  }
`;

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  background-color: #fbfcff;
  box-sizing: border-box;
`;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
`;

export const Itemy = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100px;
  height: 100px;
  background-color: #fefeff;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-left: 1vw;
  box-shadow: 0px 100px 80px rgba(41, 72, 152, 0.05),
    0px 64.8148px 46.8519px rgba(41, 72, 152, 0.037963),
    0px 38.5185px 25.4815px rgba(41, 72, 152, 0.0303704),
    0px 20px 13px rgba(41, 72, 152, 0.025),
    0px 8.14815px 6.51852px rgba(41, 72, 152, 0.0196296),
    0px 1.85185px 3.14815px rgba(41, 72, 152, 0.012037);
`;

export const ItemText = styled.div`
  font-family: Google Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #bcbdc2;
`;

export const BodyStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 75px;
  @media (max-width: 510px) {
  }
`;
export const BodyText = styled.div`
  width: 37.33528550512445vw;
  height: 58px;
  font-family: Gilroy-Light;
  font-size: 3.513909224011713vw;
  line-height: 56px;
  color: #000000;
`;

export const BodyIcon = styled.div`
  display: flex;
  width: 10vw;
  flex-direction: row;
  justify-content: space-between;
`;

export const BodyWrapper = styled.div`
  width: 37.33528550512445vw;
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
`;
export const Icon = styled.div`
  display: flex;
  width: 3.66vw;
  height: 7.6vh;
  justify-content: center;
  align-items: center;

  background: #fefeff;
  box-shadow: 0px 100px 80px rgba(41, 72, 152, 0.05),
    0px 64.8148px 46.8519px rgba(41, 72, 152, 0.037963),
    0px 38.5185px 25.4815px rgba(41, 72, 152, 0.0303704),
    0px 20px 13px rgba(41, 72, 152, 0.025),
    0px 8.14815px 6.51852px rgba(41, 72, 152, 0.0196296),
    0px 1.85185px 3.14815px rgba(41, 72, 152, 0.012037);
  border-radius: 10px;
`;

/* ... */

export const Img = styled.img`
  width: 45vw;
  height: 15vw;
  margin-left: -20px;
`;

/* ... inside the render or return of your component ... */

// export const CarImage = styled.div`
//   background-image: url(${image});
//   width: 52.12298682284041vw;
//   height: 278px;
//   background-repeat: no-repeat;
// `;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 110px;
  @media (max-width: 1040px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const WrapperGrid = styled.div`
  display: grid;
  /* flex-direction: row; */
  grid-template-columns: repeat(auto-fit, 5rem);
  margin-top: 45px;
  justify-content: space-around;

  @media (max-width: 600px) {
    display: grid;
    /* flex-direction: row; */
    grid-template-columns: repeat(2, 1fr);
    margin-left: 90px;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.83vw;

  @media (max-width: 510px) {
    margin-top: 15.4vw;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  background-color: #f9faff;
  flex-direction: row;
  padding: 20px;
  width: 60px;
  justify-content: space-between;
  margin-left: 15px;
  @media (max-width: 510px) {
    display: none;
  }
`;
export const BrandWrapper = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  margin-left: 1.1vw;

  @media (max-width: 600px) {
    margin-top: 5vw;
  }
`;
