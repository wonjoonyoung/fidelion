import React from "react";
import styled from 'styled-components';
import { Images } from "../../asset/images";
import { useNavigate } from "react-router-dom";



const cards = [
  { url: "/jp/harrier/a", image: Images.HARRIER_A},
  { url: "/jp/harrier/b", image: Images.HARRIER_B},
  { url: "/jp/harrier/c", image: Images.HARRIER_C},
  { url: "/jp/harrier/d", image: Images.HARRIER_D},
  { url: "/jp/harrier/e", image: Images.HARRIER_E},
  { url: "/jp/harrier/f", image: Images.HARRIER_F},
  { url: "/jp/harrier/g", image: Images.HARRIER_G},
  { url: "/jp/harrier/h", image: Images.HARRIER_H},
  { url: "/jp/harrier/i", image: Images.HARRIER_I},
];


function HARRIER_CARD() {
  const navigate = useNavigate()

  function move(url) {
    navigate(url);
  }

return (
  <Container>
    <Title>
    9 factions
    </Title>

    <Cards>
    {cards.map((it) => <Card onClick={() => move(it.url)} {...it} />)}
    </Cards>
  </Container>
)

}

function Card(props) {
  return (
    <CardContainer onClick={props.onClick}>
      <img alt="" src={props.image} width={"100%"} />
      <p>{props.label}</p>
    </CardContainer>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 24px 20px;
  overflow-y: scroll;
`

const Title = styled.p`
  color: #FFF;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 120% */
`

const Cards = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 16px;
  row-gap: 32px;
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > img {
    width: 100%;
  }
`



  export default HARRIER_CARD