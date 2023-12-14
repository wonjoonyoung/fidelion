import React from "react";
import styled from 'styled-components';
import { Images } from "../../asset/images";

function Fidelion_D () {
  return (
    <Container>
        <Margin  />
        <Image src={Images.FIDELION_E_A} />
        <Image src={Images.FIDELION_E_B} />
        <Margin  />
       <Content>
        <Description>
        Under Jake's command, an aide and brilliant engineer developed even more advanced military technology, eventually creating a robust and destructive bipedal weapon known as the Titan.
        </Description>
        <Image src={Images.FIDELION_E_C} />
        <Margin  />
        <Description>
        This two-legged beast is a significant addition to the Fidelian Empire's arsenal, equipped with a single extended cannon and two beaming lights on the front. It is powered by an engine and diesel and is used by the Fidelian Empire in their battles against their enemies.
        </Description>
        <Image src={Images.FIDELION_E_D} />
        <D1>
            <Image src={Images.FIDELION_E_E} />
            <Description>
            In Fidelia, gas masks symbolize dehumanized, uniformed, oppressive, and nefarious individuals and regimes or individuals who dissent from the power structure. Gas masks in Fidelia evoke dread and the implication of violence and potential doom.
            </Description>
        </D1>
        <Margin  />
        <Image src={Images.FIDELION_E_F} />
        <Margin  />
        <Description>
        In the story of Fidelion, soldiers, and harriers wear gas masks to protect their identity from severe consequences or instill fear in their enemies. The color red is associated with death, blood, and war.        </Description>
      </Content>
      <Margin  />
      <Image src={Images.FIDELION_E_G} />
      <Margin />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #fff;
`

const Image = styled.img`
  width: 100%
`

const Content = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
`

const Divider = styled.div`
  margin-top: 36px;
  border-bottom: 0.5px solid #000;
  margin-bottom: 16px;
`

const D1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  > img {
    width: 160px;
    margin-right: 16px
  }

`

const Description = styled.p`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
`

const Margin = styled.div`
  height: 48px;
`


export default Fidelion_D;

