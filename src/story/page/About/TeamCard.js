import { useState } from "react";
import React from "react";
import styled from 'styled-components';
import { Images } from "../../asset/images";

function TeamCard(props){
    return (
        <Container>
          <Profile src={props.image} />
          <Description>
            <Title>{props.title}</Title>
            <Content>{props.description}</Content>
          </Description>
        </Container>
      )
}
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 10px;
  box-sizing: border-box;
  align-items: center;
`

const Profile = styled.img`
  width: 96px;
`

const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
`

const Title = styled.p`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 125% */
`

const Content = styled.pre`
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  margin-top: 8px;
`


export default TeamCard