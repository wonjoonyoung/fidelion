import React from "react";
import { Images } from "./../Images";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FadeIn,  LeftIn, RightIn, Motion } from "./../common/Motion";

function IntroContents() {
    return (
      <Container>
        <Year>
          2055
        </Year>
        <Line />
        <CardContainer>
          <Image src={Images.Y2055_MAIN} />
          <Text>
            Extreme natural disasters began<br />
            to invade Earth. 2033
          </Text>
        </CardContainer>

        <CardContainer>
          <Image src={Images.Y2059_MAIN} />
          <Text>
            Extreme natural disasters began<br />
            to invade Earth. 2033
          </Text>
        </CardContainer>

        <CardContainer>
          <Image src={Images.Y2062_MAIN} />
          <Text>
            Extreme natural disasters began<br />
            to invade Earth. 2033
          </Text>
        </CardContainer>

        <CardContainer>
          <Image src={Images.Y2068_MAIN} />
          <Text>
            Extreme natural disasters began<br />
            to invade Earth. 2033
          </Text>
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
  padding: 20px 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
`

const Text = styled.p`
  margin-top: 8px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`

const Image = styled.img`
  margin-top: 20px;
  width: 100%;
  box-sizing: content-box;
`

  


export default IntroContents;
