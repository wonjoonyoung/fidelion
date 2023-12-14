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
              <p className={"subtitle"}>타이달 플래츠: 콘텐츠 제작 생태계의 진화</p>
              <p className={"text"}>
              타이달 플래츠의 비전은 P2P 측면에서는 강력한 가치를, P2E 측면에서는 즐거운 게임 플레이를 제공하는 강력한 IP 제품을 만드는 것입니다.
              </p>
              <p className={"text"}>
              블록체인 산업 내 서로 다른 두 분야를 하나의 IP로 결합하여 서로의 가치를 지원하고 향상시키는 상호 보완적인 관계를 만드는 것이 목표입니다.
              </p>
            </BannerContainer>
            <Margin />
            <MarginSm />
            <Image src={Images.ABOUT_A} width={"100%"} />
            <Margin />
            <Padding>
                <Text>
                타이달 플래츠는 전문 NFT 게임 개발, 커뮤니티 구축 및 전반적인 운영에 중점을 둔 웹 3.0 크리에이티브 스튜디오입니다.<br />
                  <br />
                  저희의 사명은 웹 3.0 크리에이티브 스튜디오의 개념을 한 단계 발전시키고 NFT pfp 커뮤니티의 힘을 활용하여 브랜드 인지도를 높이고 독특한 게임 생태계를 조성하는 것입니다. 웹2.0 환경의 전문성을 웹3.0 공간으로 가져와 다른 NFT 프로젝트와 차별화합니다.
                </Text>
            </Padding>
            <Margin />
            <Margin />

            <Padding>
              <Title>
              팀 경험
              </Title>
              <MarginSm />
              <Text>
              우리 스튜디오에는 각자의 분야에서 가장 재능 있는 사람들만 모였습니다.
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
  font-family: Noto Serif KR;
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