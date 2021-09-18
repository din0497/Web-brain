import styled from "styled-components";

export const StatWrapper = styled.div`
  width: 210px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-left: 20.8px;
`;

export const Num = styled.div`
  font-family: Google Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 22.6885px;
  line-height: 29px;

  /* color 3 */

  color: #1d2c3c;
`;

export const Text = styled.div`
  font-family: Google Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 17.0164px;
  line-height: 22px;
  color: #9ba6b2;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props=>props.color};
  border-radius: 50px;
  width: 50px;
  height: 50px;;
`;
export const StatSty = styled.div`
width:20vw;
@media (max-width: 510px){
  
   margin-left: 0px;

 }
`
