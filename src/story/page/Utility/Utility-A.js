import React from "react";
import styled from 'styled-components';
import { Images } from "../../asset/images";

function Utility () {
  return (
    <Container>
      <Content>
        <Margin />
        <Image src={Images.UTILITY_A} width={104} />
        <Margin />
        <Title>Project Fidelion's goal is clear:</Title>
        <MarginSm />
        <Text>
          we are a web3 IP focused on developing entertaining games featuring the Fidelion IP. Our strategy involves
          building a dedicated fan base around web3 IP and NFT, and we believe that we can more easily onboard a large
          number of web2 game players through our pfp users and community.
        </Text>
        <Margin />
        <Text>
          Our initial goal is to attract web2 customers, and we plan to achieve this through the development of a
          lightweight, mobile game that will appeal to a wide range of web2 players.
        </Text>
        <Margin />
        <Title>Game Roadmap</Title>
        <MarginSm />
        <Text>
          Our plan to create value through web3 game content IP is not a one-time endeavor. It is a multi-year plan that
          involves a number of different stages.
        </Text>
        <Margin />

        <Card
          label={"01"}
          title={"Middle-Size Mobile Gaming"}
          content={"Next, we will move on to more complex, strategy- and storytelling-focused productions that provide a gateway into the core concept and story of our project."}
          image={Images.UTILITY_B}
        />

        <Card
          label={"02"}
          title={"Light-Size Mobile Gaming"}
          content={"Initially, we will focus on the development of relatively simple and easy-to-play games that introduce the concept of combining NFTs with web2 gaming."}
          image={Images.UTILITY_C}
        />

        <Card
          label={"03"}
          title={"AAA Gaming Production"}
          content={"Finally, we will introduce productions that allow everyone to participate in the world as a part of the eco-system."}
          image={Images.UTILITY_D}
        />

        <Image src={Images.UTILITY_E} width={"100%"} />

        <MarginMd />
        <Text>
          The first game in our lineup is
        </Text>

        <MarginSm />
        <Title>[MEGA ROAD]</Title>
        <MarginSm />
        <Text>
          A free-to-play action roguelike game that allows players to build and upgrade their characters, weapons,
          and defenses. In this game, playersplayers to build and upgrade their characters, weapons, and defenses. In
          this game, players unlimited number of enemies and survive.
        </Text>

        <Margin />
        <MarginSm />
        <Overview>
          <p className={"title"}>Game Overview</p>
          <p className={"content"}>
            Project Name / MEGA ROAD<br />
            Platform / Mobile<br />
            Genre / Roguelike ARPG<br />
            Players / Single, PVE<br />
            Age / 8+<br />
            Style / Casual
          </p>
        </Overview>

        <Margin />

        <OverviewItem>
          <p className={"title"}>Roguelike</p>
          <p className={"content"}>
            Survive against mutations, beasts, machines, and harriers. Protect yourself by
            switching weapons and gear to become stronger. Support your character by giving orders and deploying special
            attacks during battle.
          </p>
        </OverviewItem>

        <OverviewItem>
          <p className={"title"}>Survival</p>
          <p className={"content"}>
            Survival is the top priority. Successful defenses are rewarded with in-game resources and tokens.
          </p>
        </OverviewItem>

        <OverviewItem>
          <p className={"title"}>Gear</p>
          <p className={"content"}>
            Defend yourself from attackers by upgrading, deploying, expanding, and experimenting with your gear. Upgrade
            and customize your weapons as you collect tokens in battle.
          </p>
        </OverviewItem>

        <OverviewItem>
          <p className={"title"}>Missions</p>
          <p className={"content"}>
            The game features a single combat system whose primary goal is to simply survive the attacks. Watch other
            players, learn the best combinations of your weapons and skills, and perform successful reprisals to earn
            bonus loot and resources.
          </p>
        </OverviewItem>

        <Margin />

        <Title>TOKENOMICS</Title>
        <MarginSm />
        <Text>
          Games developed under the Fidelion IP will share a common token economy and be set in the same world with the
          same vision and token. We will provide more information about the tokenomics of these games after their
          release.
        </Text>

        <Margin />
        <MarginSm />

        <Title>$2080 TOKEN</Title>
        <MarginSm />
        <Text>
          $2080 is the token that serves as the foundation of Dusty Survivor. Our goal is to create a sustainable<br />
          in-game currency that supports the stability of the entire ecosystem.<br />
          <br />
          The reward pool is primarily designed to credit three categories of players:<br />
        </Text>
        <MarginSm />
        <List>
          <li> Dedicated players</li>
          <li> Ecosystem contributors</li>
          <li> Risk-takers</li>
        </List>
        <MarginSm />
        <Text>
          We aim for the value of our token to be strongly correlated with the number of users and their activity.
        </Text>

        <Margin />
        <MarginSm />

        <Title>Music</Title>
        <MarginSm />
        <Text>
          Music plays a significant role in the development of our own unique worldview, and we are dedicated to
          incorporating it into our work. To support this focus, we have hired an executive to oversee music within our
          team and are collaborating with a professional music production company to create music for a wider audience.
          This is a long-term pursuit that we have big plans for, so stay tuned for updates.
        </Text>

        <Margin />

        <Title>Merchandise</Title>
        <MarginSm />
        <Text>
          We are also working with several apparel companies to create iconic clothing for each faction. At Project
          Fidelion, we believe that style is an important aspect of everything we do.<br />
          <br />
          Keep an eye out for exciting collaborations coming soon.<br />
        </Text>

        <Margin />
        <MarginSm />
      </Content>
    </Container>
  )
}

function Card(props) {

  return (
    <CardContainer>
      <p className={"label"}>{props.label}</p>
      <img src={props.image} alt={""} />
      <p className={"title"}>{props.title}</p>
      <p className={"content"}>{props.content}</p>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  margin-bottom: 36px;
  padding: 20px 20px;

  & > .title {
    margin-top: 24px;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 125% */
  }

  & > .label {
    color: #8D8D8D;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 100% */
  }

  & > .content {
    margin-top: 8px;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
  }

  & > img {
    width: 100%;
    margin-top: 16px;
  }
`

const Overview = styled.div`
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;

  .title {
    color: #FFF;
    text-align: center;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 90.909% */
  }

  .content {
    margin-top: 16px;
    color: #FFF;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
`

const OverviewItem = styled.div`
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  margin-bottom: 28px;

  .title {
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 125% */
  }

  .content {
    margin-top: 8px;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
  }
`

const List = styled.ul`
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;

  li::before {
    color: white; /* Change the color */
    font-weight: bold; /* If you want it to be bold */
    display: inline-block; /* Needed to add space between the bullet and the text */
  }

  li {
    margin-left: 36px;
  }
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.p`
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;

  color: #FFF;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25), 0 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 100% */
`

const Text = styled.p`
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
`

const Image = styled.img`
`

const Margin = styled.div`
  height: 36px
`

const MarginMd = styled.div`
  height: 24px
`

const MarginSm = styled.div`
  height: 16px;
`



export default Utility;

