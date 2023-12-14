import React from "react";
import styled from 'styled-components';
import { Images } from "../../asset/images";
import { SectionLogo } from "../../asset/SectionLogo";

function UtilityIntro () {
  return (
    <Container>
    <Content>
      <Title>Utility</Title>
      <Label>Fidelion, MegaRoad, and becoming the first web3 multimedia franchise.</Label>
      <SectionLogo src={Images.C_LOGO} />
    </Content>
    <Background src={Images.C_BACKGROUND} />
  </Container>
  );
}


const Container = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 780px;
  position: relative;
`

const Content = styled.div`
  width: 100%;
  padding: 24px 20px;
  box-sizing: border-box;

  > * {
    z-index: 1;
  }
`

const Title = styled.p`
  color: #FFF;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 108%; /* 25.92px */
  letter-spacing: -0.48px;
`

const Label = styled.p`
  margin-top: 12px;

  color: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 121.021%; /* 19.363px */`

  const Image = styled.img`
`

const Background = styled.img`
  z-index: -1;
  position: absolute;
  width: 100%;
  bottom: 0;
`


export default UtilityIntro;

