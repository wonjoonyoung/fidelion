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
        프로젝트 피델리온의 목표는 피델리온 IP를 활용한 재미있는 콘텐츠 및 IP를 개발하는 웹 3.0 개발사입니다. 우리의 전략은 웹3.0 IP와 NFT를 중심으로 열성적인 팬층을 구축하는 것이며, 이를 통해 많은 웹2.0 콘텐츠를 즐길 수 있는 유저를 더 쉽게 확보할 수 있다고 믿습니다.
        </Text>
        <Margin />
        <Text>
        우리의 초기 목표는 웹3.0 베이스에 많은 팬층을 확보하고 웹2.0에서 추가적인 고객을 유치하는 것이며, 다양한 웹2.0 플레이어에게 어필할 수 있는 가벼운 모바일 게임을 개발하여 이를 달성하려 합니다.        </Text>
        <Margin />
        <Title>Game Roadmap</Title>
        <MarginSm />
        <Text>
        프로젝트 피델리온의 목적인 웹3.0 기반 콘텐츠 IP를 통한 가치 창출 계획은 일회성으로 끝나는 것이 아닙니다. 이는 여러 단계로 구성된 수년간 지속가능한 계획으로 구현되어야 합니다.
        </Text>
        <Margin />

        <Card
          label={"01"}
          title={"캐주얼 모바일 게임"}
          content={"초기에는 NFT와 웹2.0 게임의 결합이라는 개념을 도입한 비교적 간단하고 플레이하기 쉬운 게임 개발에 집중하였습니다. 메가로드는 현재 안드로이드와 iOS에서 플레이가 가능합니다."}
          image={Images.UTILITY_B}
        />

        <Card
          label={"02"}
          title={"중간 사이즈 게임 혹은 콘텐츠"}
          content={"다음으로, 프로젝트의 핵심 콘셉트와 스토리에 대한 관문을 제공하는 좀 더 복잡하고 전략과 스토리텔링에 중점을 둔 작품으로 작품 제작을 전개해나갈 예정입니다."}
          image={Images.UTILITY_C}
        />

        <Card
          label={"03"}
          title={"AAA 게임 생산"}
          content={"최종적으로, 피델리온의 목표는 트리플A 게임 규모의 게임을 만들어내는 데에 있습니다. 모두가 함께 참여 가능한 형태의 게임을 만드는 그 날을 함께 꿈꾸고 싶습니다."}
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
        라인업의 첫 번째 게임은 플레이어가 캐릭터, 무기, 방어를 구축하고 업그레이드할 수 있는 무료 액션 로그라이크 게임인 "메가로드" 입니다. 이 게임에서 플레이어는 전장을 전략적으로 제어하고 다양한 스킬셋 메커니즘을 사용하여 무제한의 적을 물리치고 생존해야 합니다.
        </Text>

        <Margin />
        <MarginSm />
        <Overview>
          <p className={"title"}>게임 요약</p>
          <p className={"content"}>
          프로젝트 이름 / 메가로드 (Mega Road)<br />
          플랫폼 / 모바일<br />
          장르 / 로그라이크 ARPG<br />
          플레이어 / 싱글, PVE<br />
          연령 / 8세 이상<br />
          스타일 / 캐주얼
          </p>
        </Overview>

        <Margin />

        <OverviewItem>
          <p className={"title"}>로그라이크</p>
          <p className={"content"}>
          돌연변이, 야수, 기계, 해리어에 맞서 생존하세요. 무기와 장비를 교체하여 더 강해져 자신을 보호하세요. 전투 중에 명령을 내리고 특수 공격을 배치하여 캐릭터를 지원하세요.
          </p>
        </OverviewItem>

        <OverviewItem>
          <p className={"title"}>생존</p>
          <p className={"content"}>
          본 게임에선 생존이 최우선입니다. 방어에 성공하면 게임 내 자원을 보상으로 받을 수 있습니다.
          </p>
        </OverviewItem>

        <OverviewItem>
          <p className={"title"}>장비</p>
          <p className={"content"}>
          장비를 업그레이드하고, 배치하고, 확장하고, 실험하여 공격자로부터 자신을 방어하세요. 전투에서 자원을 모아 무기를 업그레이드하고 커스터마이징하세요.
          </p>
        </OverviewItem>

        <OverviewItem>
          <p className={"title"}>미션</p>
          <p className={"content"}>
          이 게임은 단순히 공격에서 살아남는 것을 주요 목표로 하는 단일 전투 시스템을 갖추고 있습니다. 다른 플레이어를 관찰하고, 무기와 스킬의 최상의 조합을 배우고, 보복을 성공적으로 수행하여 보너스 전리품과 자원을 획득하세요.
          </p>
        </OverviewItem>

        <Margin />

        <Title>토크노믹스</Title>
        <MarginSm />
        <Text>
        피델리온 IP로 개발되는 게임은 각자의 토큰 이코노미를 간접적으로 공유하며, 동일한 비전과 토큰을 가진 동일한 세계를 배경으로 합니다. 토큰에 관련된 자세한 내용은 화이트페이퍼를 참고하실 수 있습니다.
        </Text>

        <Margin />
        <MarginSm />

        <Title>$2080 TOKEN</Title>
        <MarginSm />
        <Text>
        Staking 기반의 게임인 블랙마켓의 기본 구조를 제공하는 토큰은 $2080입니다. 저희의 목표는 전체 생태계의 안정성을 지원하는 디지털 화폐를 만드는 것입니다.
          <br /><br />
          보상 풀은 주로 세 가지 범주의 플레이어를 위해 설계되었습니다:<br />
        </Text>
        <MarginSm />
        <List>
          <li> 헌신적인 플레이어</li>
          <li> 생태계 기여자</li>
          <li> 위험 감수자</li>
        </List>
        <MarginSm />
        <Text>
        저희는 토큰의 가치가 사용자 수 및 활동과 밀접한 상관관계를 갖도록 하는 것을 목표로 합니다.
        </Text>

        <Margin />
        <MarginSm />

        <Title>음악</Title>
        <MarginSm />
        <Text>
        음악은 피델리온만의 독특한 세계관을 개발하는 데 중요한 역할을 하며, 피델리온은 이를 작품에 반영하기 위해 최선을 다하고 있습니다. 이러한 노력을 뒷받침하기 위해 팀 내에서 음악을 총괄하는 임원을 채용했으며, 전문 음악 제작사와 협력하여 더 많은 사용자를 위한 음악을 제작하고 있습니다.  현재 스포티파이에 피델리온의 이름으로 앨범이 발표된 상태입니다.
        </Text>

        <Margin />

        <Title>머챈다이즈</Title>
        <MarginSm />
        <Text>
        피델리온은 여러 의류 회사와 협력하여 각 진영의 상징적인 의상을 제작하고 있습니다. 프로젝트 피델리온에서는 스타일이 우리가 하는 모든 일에서 중요한 요소 중 하나라고 생각합니다.<br />
          <br />
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

