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
              <p className={"subtitle"}>Tidal Flats: コンテンツ構築エコシステムの進化。</p>
              <p className={"text"}>
              Tidal Flats に対する当社のビジョンは、PFP 側で強力な価値を持ち、P2E 側で楽しいゲームプレイを備えた強力な IP 製品を作成することです。              </p>
              <p className={"text"}>
              単一の IP の下でブロックチェーン業界内の 2 つの異なるセクターを組み合わせることで、サポートする補完的な関係を構築することを目指しています。そして両方の価値を高めます。              </p>
            </BannerContainer>
            <Margin />
            <MarginSm />
            <Image src={Images.ABOUT_A} width={"100%"} />
            <Margin />
            <Padding>
                <Text>
                TidalFlatsは、プロフェッショナルなNFTゲーム開発、コミュニティ構築、および全体的な運営に焦点を当てたWeb3クリエイティブスタジオです。<br />
                  <br />
                  私たちの使命は、Web3 クリエイティブスタジオのコンセプトを次のレベルに引き上げ、NFT PFPコミュニティの力を活用してブランドを向上させることです。認識を高め、独自のゲームエコシステムを構築します。当社は、Web2環境のレベルのプロフェッショナリズムをWeb3領域に持ち込むことで、他のNFTプロジェクトとは一線を画しています。
                </Text>
            </Padding>
            <Margin />
            <Margin />

            <Padding>
              <Title>
              チームの経験
              </Title>
              <MarginSm />
              <Text>
              社内には最も才能のある人材だけがいます。
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