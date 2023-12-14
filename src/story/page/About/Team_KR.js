import { useState } from "react";
import React from "react";
import styled from 'styled-components';
import { Images } from "../../asset/images";
import TeamCard from "./TeamCard";

const items = [
    "LEADERSHIP",
    "DESIGN",
    "DEV",
    "MARKETING",
  ] 


function Team() {
    const teams = [
    // leadership
    {
        image: Images.ABOUT_PROFILE_HOKYO,
        team: "LEADERSHIP",
        title: "Hokyo | Creative Director",
        description: `30+ Years AAA Game Director\nRiot Game Founding Member`,
      },
      {
        image: Images.ABOUT_PROFILE_RYOT,
        team: "LEADERSHIP",
        title: "Ryot | Studio Director",
        description: `10+ Years Biz Dev\nPreviously An Energy Expert`,
      },
      {
        image: Images.ABOUT_PROFILE_RIZEL,
        team: "LEADERSHIP",
        title: "Rizel | Game Lead",
        description: `10+ Years Balance Designer\nPreviously \n@Mobile Game Expert`,
      },
      {
        image: Images.ABOUT_PROFILE_BO,
        team: "LEADERSHIP",
        title: "Bo | Marketing Director",
        description: `Web2 SNS Marketing Expert\nPreviously CMO @Catalyst Defi`,
      },
      {
        image: Images.ABOUT_PROFILE_EASTONE,
        team: "LEADERSHIP",
        title: "Eastone | Lead Designer",
        description: `5+ Years Game Art Lead\nFoundation Artist`,
      },
      {
        image: Images.ABOUT_PROFILE_BELLA,
        team: "LEADERSHIP",
        title: "Bella | Community Lead",
        description: `Human Resource Expert\nPreviously @SNOW`,
      },
      // design
      {
        image: Images.ABOUT_PROFILE_EASTONE,

        team: "DESIGN",
        title: "Eastone | Lead Designer",
        description: `5+ Years Game Art Lead\nFoundation Artist`,
      },
      {
        image: Images.ABOUT_PROFILE_JASON,

        team: "DESIGN",
        title: "Jason | Designer",
        description: `3D / 2D Designer\nPreviously 3D Animation\nModeler`,
      },
      {
        image: Images.ABOUT_PROFILE_MJ,
        team: "DESIGN",
        title: "MJ | Artist",
        description: `Fashion Designer\nTalented Junior Artist`,
      },
      // dev
      {
        image: Images.ABOUT_PROFILE_BLAIR,
        team: "DEV",
        title: "Blair | Backend Dev",
        description: `Backend Dev\nPreviously Founder of \nIT Ventures`,
      },
      {
        image: Images.ABOUT_PROFILE_CARROL,
        team: "DEV",
        title: "Carrol | Game Dev",
        description: `Unreal Engine Game Dev\nPreviously \n@Larva (3D Animation)`,
      },
      // marketing
      {
        image: Images.ABOUT_PROFILE_BO,
        team: "MARKETING",
        title: "Bo | Marketing Director",
        description: `Web2 SNS Marketing Expert\nPreviously CMO @Catalyst Defi`,
      },
    ]
    const [selected, setSelected] = useState("LEADERSHIP");

    return(
        <Container>
        <Title>Core Team</Title>
        <HeaderContainer>
          <div>
            {items.map(it => (
              <Item selected={selected === it} onClick={() => setSelected(it)}>{it}</Item>
            ))}
          </div>
        </HeaderContainer>
        {teams.filter(it => it.team === selected).map(it => (
          <TeamCard {...it} />
        ))}
      </Container>
    )
}

const Container = styled.div`
  width: 100%;
  margin-bottom: 36px;
`

const Title = styled.p`
  padding: 0 20px;

  color: #000;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 90.909% */
`

const HeaderContainer = styled.div`
  margin-top: 16px;
  padding: 0 20px;
  overflow-x: scroll;
  margin-bottom: 36px;

  div {
    display: flex;
    flex-direction: row;
    column-gap: 24px;
    width: max-content;
  }
`

const Item = styled.p`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 100% */
  text-decoration-line: ${props => props.selected ? "underline" : "none"};
`


export default Team