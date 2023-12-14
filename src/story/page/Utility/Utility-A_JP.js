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
        <Title>フィデリオンの目標は明確です。</Title>
        <MarginSm />
        <Text>
        それは、最高の黙示録的なダークファンタジーサーガIPを構築することです。当社は、フィデリオンIPを特徴とする製品の開発に重点を置いたWeb3IPを構築します。私たちの戦略には、Web3IPとNFTを中心とした専用のファンベースの構築が含まれており、pfpユーザーやコミュニティを通じて多くのWeb2ユーザーをより簡単に活動開始させるできます。        </Text>
        <Margin />
        <Text>
        私たちの最初の目標は、Web2の顧客を引き付けることであり、幅広いWeb2プレーヤーにアピールできる軽量モバイル ゲームを開発することでこれを達成する予定です。        </Text>
        <Margin />
        <Title>ゲームのロードマップ</Title>
        <MarginSm />
        <Text>
        Web3ゲームコンテンツIPを通じて価値を創造するという私たちの計画は、一度限りの取り組みではありません。代わりに、これは複数の異なる段階を含む複数年計画です。
        </Text>
        <Margin />

        <Card
          label={"01"}
          title={"軽量モバイルゲーム"}
          content={"当初は、NFTとWeb2ゲームを組み合わせるという概念を導入した、比較的シンプルでプレイしやすいゲームの開発に焦点を当てます。"}
          image={Images.UTILITY_B}
        />

        <Card
          label={"02"}
          title={"中型モバイル ゲーム"}
          content={"次に、プロジェクトの中核となるコンセプトとストーリーへの入り口となる、より複雑で戦略とストーリーテリングに重点を置いた制作に移ります。"}
          image={Images.UTILITY_C}
        />

        <Card
          label={"03"}
          title={"AAA (トリプル-A) ゲーム制作"}
          content={"最後に、誰もがエコシステムの一部として世界に参加できる作品を紹介します。"}
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
        私たちのラインナップの最初のゲームは、プレイヤーが自分のキャラクター、武器、防御を構築およびアップグレードできる、基本プレイ無料のアクション ローグライクゲームであるMEGAROADです。このゲームでは、プレイヤーは戦場の戦略的コントロールとさまざまなスキルセットの仕組みを利用して、無制限の数の敵を倒し、生き残る必要があります。        </Text>

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

        <Title>トークンノミクス</Title>
        <MarginSm />
        <Text>
        フィデリオンIPに基づいて開発されたゲームは、典型的なトークンエコノミーを共有し、同じビジョンとトークンを使用して同じ世界を舞台とします。これらのゲームのトークンノミクスについては、リリース後に詳細情報を提供する予定です。        </Text>

        <Margin />
        <MarginSm />

        <Title>$2080トークン</Title>
        <MarginSm />
        <Text>
        $2080がMEGAROADの基盤となるトークンです。私たちの目標は、エコシステム全体の安定性をサポートするゲーム内通貨を作成することです。<br /><br />

        報酬プールは主に、熱心なプレイヤー エコシステム貢献者とリスクテイカーという 3 つのカテゴリーのプレイヤーにクレジットを与えるように設計されています。<br /><br />

        私たちは、トークンの価値がユーザーの数とそのアクティビティと強く相関することを目指しています。          <br />
          보상 풀은 주로 세 가지 범주의 플레이어를 위해 설계되었습니다:<br />
        </Text>

        <Margin />
        <MarginSm />

        <Title>音楽</Title>
        <MarginSm />
        <Text>
        音楽は私たちの独特の世界観を発展させる上で重要な役割を果たします。私たちはそれを仕事に組み込むことに専念しています。この焦点をサポートするために、私たちはチーム内の音楽を監督する幹部を雇用しました。さらに、プロの音楽制作会社と協力して、より幅広い聴衆に向けた音楽を制作しています。私たちはこの長期的な取り組みに向けて大きな計画を立てていますので、最新情報に注目してください。        </Text>
        <Margin />

        <Title>商品</Title>
        <MarginSm />
        <Text>
        また、いくつかのアパレル会社と協力して、各派閥の象徴的な衣服を作成しています。プロジェクト フィデリオンでは、スタイルは私たちが行うすべてのことの重要な側面です。近々登場するエキサイティングなコラボレーションにご注目ください。          <br />
        coming soon.<br />
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
  font-family: Noto Serif KR;
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

