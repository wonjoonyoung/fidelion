import React from "react";
import styled from "styled-components";


export function Intermission() {
  return (
    <Container>
    <Text>
    Year 2080, a new era of the wasteland.
The beginning of the end.
Welcome to the World of the Fidelian Empire.
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

`

const Text = styled.p`
  padding: 60px 20px;
  margin-bottom: 300px;
  color: #FFF;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 140% */
  letter-spacing: -0.4px;
`
export default Intermission;
