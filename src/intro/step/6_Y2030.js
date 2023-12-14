import React from "react";
import { Images } from "./../Images";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FadeIn,  LeftIn, RightIn, Motion } from "./../common/Motion";

function IntroContents() {
  return (
    <Container {...FadeIn({ delay: 0.8 })}>
      <Year>
        2030
      </Year>
      <Line />
      <ImageContainer>
      <Image src={Images.Y2030_MAIN} />

      </ImageContainer>

      <Image src={Images.Y2030_SECOND} />

      <Title>
          In 2030,<br />
          nations got more selfish and<br />
          arrogant toward one another.<br />
        </Title>


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
  margin-top: 20px;
  padding: 8px 20px;

  color: #FFF;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.48px;
`

const ImageContainer = styled.div`
  margin-top: 24px;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: calc(100vw * 0.7);
`

const Image = styled.img`
  width: 100%;
`



export default IntroContents;
