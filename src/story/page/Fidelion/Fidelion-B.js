import React from "react";
import styled from 'styled-components';
import { Images } from "../../asset/images";

function Fidelion_B () {
  return (
    <Container>
       <Image src={Images.FIDELION_B_A} />
      <Content>
        <Divider />
        <Description>
          Jake controls one of the biggest oil system in the post-apocalyptic world in North America. He uses the oil
          resource to maintain control over Fidelia. In this empire, people are kept in a state of bare survival and
          they react in two ways.<br />
          <br />
          They either rise up against their leader or they forget their other concerns and focus solely on the few
          valuable items they receive. The lower class citizens of Fidelia do not have the luxury of focusing on
          anything other than survival.<br />
        </Description>
      </Content>

      <Image src={Images.FIDELION_B_B} />
      <Margin />
      <Content>
        <Description>
          There are many types of balance in the world, such as up and down, rich and poor, coexistence and division,
          and order and chaos. The architecture of the Fidelion building reflects this balance by embracing and
          accommodating these various elements.<br />
          <br />
          At first glance, the cognitive system, class society, and assigned roles in Fidelia may appear unstable and
          dangerous. However, the balance of yin and yang supports the system from within and can also be seen in the
          architectural style, achieving a precarious balance in their society.<br />
        </Description>
        <Divider />
        <Image src={Images.FIDELION_B_C} />
        <div style={{ height: 20 }} />
        <Image src={Images.FIDELION_B_D} />
        <Copyright>
          Directed by Hokyo Lim
        </Copyright>
      </Content>

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

const Copyright = styled.p`
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 12px */
  letter-spacing: 1.44px;
  width: 100%;
  text-align: center;
  margin-top: 24px;
`

export default Fidelion_B;

