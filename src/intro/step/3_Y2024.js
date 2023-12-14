import React from "react";
import { Images } from "./../Images";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FadeIn,  LeftIn, RightIn, Motion } from "./../common/Motion";

function IntroContents() {
  return (
    <Container {...FadeIn({ delay: 0.8 })}>
      <Year>
        2024
      </Year>
      <Line />

      
      <SmallContainer {...LeftIn({ delay: 0.5 })}>
          <ImageSmall src={Images.Y2024_SMALL} />
          <Text style={{ marginLeft: 16, marginTop: 4 }}>
            Atomic explosions produced<br />
            radiation, heat,<br />
            and bias impacts. 2024<br />
          </Text>
        </SmallContainer>

        <MainContainer {...RightIn({ delay: 0.5, duration: 1 })}>
          <ImageMain src={Images.Y2024_MAIN} />
          <Text style={{ marginLeft: 4, marginTop: 16 }}>
            Governments all over<br />
            the world lacked financial aid.<br />
            2024<br />
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



    const Container = styled(Motion)`
    padding: 40px 20px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;;
  
    display: flex;
    flex-direction: column;
  `
  
  const Text = styled.p`
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  `
  
  const SmallContainer = styled(Motion)`
    display: flex;
    flex-direction: row;
    margin-top: 16px;
    margin-left: -8px;
    z-index: 1;
  `
  
  const ImageSmall = styled.img`
    width: 44%;
    z-index: 1;
  `
  
  const MainContainer = styled(Motion)`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    margin-top: -12px;
    margin-left: 32px;
    width: 85%;
  `
  
  
  const ImageMain = styled.img`
  `
 
  const Margin = styled.div`
  width: 100%;
  hight: 24px
  `



export default IntroContents;
