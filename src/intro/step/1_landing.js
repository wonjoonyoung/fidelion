import React from "react";
import { Images } from "./../Images";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FadeIn, Motion } from "./../common/Motion";

function IntroContents() {
  return (
    <Container {...FadeIn({ delay: 0.5 })}>
      <Title>
        The world was in a state of complete disorder and confusion.
        <br />
        Disaster after disaster.
      </Title>
      <img src={Images.BOTTOM_ARROW_ICON} alt={""} style={{ marginTop: 28, width: 24 }} />

    </Container>
  );
}

const Container = styled(Motion)`
  margin-top : 40%;
  width: 100%;
  height: 100%;
  padding: 12px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
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
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 130% */
  letter-spacing: -0.4px;
`;





export default IntroContents;
