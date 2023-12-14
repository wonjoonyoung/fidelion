import React from "react";
import styled from "styled-components";


export function Intermission() {
  return (
    <Container>
    <Text>
      The previous leaders,<br />
      who were supported by many, were replaced by new leaders.<br />
      <br />
      People hoped that the new leaders would be able to restore stability and return the world to a state of<br />
      normalcy after the embers of war and the economic crisis.<br />
      <br />
      However, these hopes were not realized.
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
  background: #26756E;
`

const Text = styled.p`
  padding: 48px 20px;
  color: #FFF;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 140% */
  letter-spacing: -0.4px;
`
export default Intermission;
