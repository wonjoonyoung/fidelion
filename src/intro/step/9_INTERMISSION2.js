import React from "react";
import styled from "styled-components";


export function Intermission() {
  return (
    <Container>
    <Text>
    In the event of the worst nuclear war, the government had no choice but to evacuate everyone from the world,
          to the underground bunker.
    </Text>
  </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 36px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background: #EE230D;
`

const Text = styled.p`
  padding: 150px 20px;
  color: #FFF;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 140% */
  letter-spacing: -0.4px;
`
export default Intermission;
