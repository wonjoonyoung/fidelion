import React from "react";
import { Images } from "./../Images";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FadeIn,  LeftIn, RightIn, Motion } from "./../common/Motion";

function IntroContents() {
  return (
    <Container {...FadeIn({ delay: 0.8})}>
      <Year>
        2025
      </Year>
      <Line />

      
      <Title>
          Food crisis killed hundreds of millions,<br />
          perhaps even billions. 2025
        </Title>

        <SmallContainer>
          <ImageSmall src={Images.Y2025_FIRST} />
        </SmallContainer>

        <MainContainer>
          <ImageMain src={Images.Y2025_SECOND} />
          <Text>
            Global citizens blamed<br />
            their countries government<br />
            for the nuclear war. 2025<br />
          </Text>
        </MainContainer>
    </Container>
  );
}

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


    const Container = styled.div`
    padding: 40px 20px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;;
  
    display: flex;
    flex-direction: column;
  `
  
  const Title = styled.p`
    font-size: 18px;
    font-weight: 400;
    margin: 20px 20px 0;
  `
  
  const Text = styled.p`
    font-size: 16px;
    font-weight: 400;
  `
  
  const SmallContainer = styled.div`
    padding-left: 10px;
    display: flex;
    flex-direction: row;
    margin-top: 16px;
    margin-left: -8px;
  `
  
  const ImageSmall = styled.img`
    width: 80%;
  `
  
  const MainContainer = styled.div`
    align-self: flex-end;
    display: flex;
    width: 80%;
    flex-direction: column;
    margin-top: -32px;
    margin-right: -16px;
  `
  
  const ImageMain = styled.img`
    z-index: 1;
    width: 95%;
  `
  
  




export default IntroContents;
