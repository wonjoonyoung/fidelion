import React from "react";
import { Images } from "./../Images";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FadeIn, Motion } from "./../common/Motion";

function IntroContents() {
  return (
    <Container {...FadeIn({ delay: 0.7 })}>
      <Year>
        2023
      </Year>
      <Line />
      <Image src={Images.Y2023_MAIN} />
      <Title>
      War has begun <br />and it spreads until 2023.
      </Title>
    </Container>
  );
}




const Container = styled(Motion)`
  width: 100%;
  height: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
`;

const Year = styled.div`
    color: #B1B1B1;
    width: 100%;
    display: block;
    text-align: right;
    font-size: 20px;
    font-weight: 600;
    line-height: 26px; /* 130% */
    letter-spacing: -0.4px;
`;

const Line = styled.hr`
    width: 100%;
    height: 0.5px;  // height 속성 추가
    background-color: #646464;
    border: none;  // border 속성 추가 또는 border: 0; 으로 설정
    `;

const SmContaiver = styled(Motion)`
margin-top : 50%;
width: 100%;
height: 100%;
padding: 12px 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-sizing: border-box;
`; 

const Title = styled.p`
  color: #FFF;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 130% */
  letter-spacing: -0.4px;
`;

const Image = styled.img`
  margin-top: 24px;
  width: 100%;
  `;




export default IntroContents;
