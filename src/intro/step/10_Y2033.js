import React from "react";
import { Images } from "./../Images";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FadeIn,  LeftIn, RightIn, Motion } from "./../common/Motion";

function IntroContents() {
  return (
    <Container {...FadeIn({ delay: 0.8 })}>
      <Year>
        2033
      </Year>
      <Line />
      <CardContainer>
          <Text>
            Extreme natural disasters began<br />
            to invade Earth. 2033
          </Text>
          <Image src={Images.Y2033_MAIN} />
        </CardContainer>

        <CardContainer>
          <Text>
            The consequence of facing dangers of death<br />
            or severe injuries. 2042
          </Text>
          <Image src={Images.Y2042_MAIN} />
        </CardContainer>


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
  box-sizing: border-box;
  ;
  padding-bottom: 64px;

  display: flex;
  flex-direction: column;
`

const CardContainer = styled.div`
  width: 100%;
  position: relative;
  margin-top: 20px;
  margin-bottom: 36px;
`

const Text = styled.p`
  position: absolute;
  margin: 16px 20px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`

const Image = styled.img`
  width: 100%;
`




export default IntroContents;
