import React from "react";
import styled from 'styled-components';
import {Images} from "../../asset/images";
import Team from "../About/Team";


function AboutText() {

return(
  
    <Container>

        <Content>
            <Margin />
            <Image src={Images.ABOUT_BANNER} width={320} />
            <Margin />
            <MarginSm />

            <BannerContainer>
              <p className={"title"}>Who we are and what we do</p>
              <p className={"subtitle"}>Tidal Flats: Evolvement of the Contents Building Eco-system</p>
              <p className={"text"}>
                Our vision for Tidal Flats is to create a strong IP product with strong value on the pfp
                side and enjoyable gameplay on the P2E side.
              </p>
              <p className={"text"}>
                By combining two different sectors within the blockchain industry under a single IP, we aim to create a
                complementary relationship that supports and enhances the value of both.
              </p>
            </BannerContainer>
            <Margin />
            <MarginSm />
            <Image src={Images.ABOUT_A} width={"100%"} />
            <Margin />
            <Padding>
                <Text>
                  Tidal Flats is a Web3 creative studio that focuses on professional NFT game development, community building,
                  and overall operations.<br />
                  <br />
                  Our mission is to take the concept of a Web3 creative studio to the next level and leverage the power of the
                  NFT pfp community to increase brand awareness and create a unique gaming ecosystem. We distinguish ourselves
                  from other NFT projects by bringing a level of professionalism from the Web2 environment into the Web3
                  space.
                </Text>
            </Padding>
            <Margin />
            <Margin />

            <Padding>
              <Title>
                Team Experiences
              </Title>
              <MarginSm />
              <Text>
                We only have the most talented people in the house.
              </Text>
            </Padding>
            <MarginSm />
            <Image src={Images.ABOUT_B} width={"100%"} />
            <Margin />
            <Team />
            <Padding>

            <Label>Noticeable Projects led by Hokyo Lim</Label>
            <Title>Director Profile</Title>
            <MarginSm />
            <Label>
              Executive Producer | Neostream | Little Devil Inside<br />
              Head of Studio | Smilegate Games<br />
              Art Director | Giant Sparrow | The Unfinished Swan<br />
              Art Director | Riot Games | The League of Legends<br />
              Art Director | Hinterland | The Long Dark<br />
              Lighting Director | Sucker Punch | Sly Cooper series<br />
            </Label>
            </Padding>
            <Image src={Images.ABOUT_C} />
            <Margin />
            <Padding>
            <Title>
            BACKERS & PARTNERS
            </Title>
            <Image src={Images.ABOUT_D} style={{ marginTop: 12 }} />
            </Padding>
            <Margin />
        </Content>    
    </Container>
)

}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
`

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
`

const Image = styled.img`
margin-top: 12px;
width: 100%;
`
const Label = styled.p`
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`

const BannerContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;

  .title {
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 100% */
  }

  .subtitle {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 125% */
  }

  .text {
    margin-top: 16px;
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
  }
`

const Title = styled.p`
  color: #000;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 90.909% */
`

const Text = styled.p`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
`

const Padding = styled.div`
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
`

const Margin = styled.div`
  height: 36px
`

const MarginSm = styled.div`
  height: 12px;
`

export default AboutText