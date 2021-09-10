import React from "react";
import styled from "styled-components";
import image from "../assets/car.png";

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  padding: 0;
  margin-top: -5px;
`;
export const Li = styled.li`
  color: #838383;
  list-style-type: none;
  margin-bottom: 30px;
  align-items: center;
  display: flex;
`;

export const Text = styled.div`
  margin-left: 15px;
`;

export const SidebarContainer = styled.div`
  width: 20%;
  background-color: white;
`;

export const H4 = styled.h4`
  /* width:200px; */
  color: #3629b7;
  /* margin: 20px 0 0 35px; */
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #fbfcff;
  box-sizing: border-box;
`;
export const MainContainer = styled.div`
  width: 75%;
`;

export const Itemy = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 102px;
  background-color: #fefeff;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
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
  margin-left:75px;
  /* margin-top: 110px; */
`;
export const BodyText = styled.div`
  width: 510px;
  height: 58px;
  font-family: Gilroy-Light;
  font-size: 48px;
  line-height: 56px;
  color: #000000;
`;

export const BodyIcon = styled.div`
  display: flex;
  width:140px;
  flex-direction: row;
  justify-content: space-between;
`;

export const BodyWrapper = styled.div`
  width: 510px;
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
`;
export const Icon = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;

  /* cards bg */

  background: #fefeff;
  box-shadow: 0px 100px 80px rgba(41, 72, 152, 0.05),
    0px 64.8148px 46.8519px rgba(41, 72, 152, 0.037963),
    0px 38.5185px 25.4815px rgba(41, 72, 152, 0.0303704),
    0px 20px 13px rgba(41, 72, 152, 0.025),
    0px 8.14815px 6.51852px rgba(41, 72, 152, 0.0196296),
    0px 1.85185px 3.14815px rgba(41, 72, 152, 0.012037);
  border-radius: 10px;
`;

export const CarImage = styled.div`
  background-image: url(${image});
  width: 712px;
  height: 278px;
  background-repeat: no-repeat;
`;

export const Wrapper = styled.div`
 display: flex;
 flex-direction: row;
 margin-top: 110px;
`
