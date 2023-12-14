import React from "react";
import styled from 'styled-components';
import { Images } from "../../asset/images";

function Fidelion_C_KR () {
  return (
    <Container>
      <Image src={Images.FIDELION_C_A} />
      <Margin />
      <Description>
      다시 제국이 되기 전의 피델리아 이야기로 돌아가 보면, 제이크의 마을은 무법자들을 물리친 이후로 번영을 거듭하고 있었다. 그가 만들어 낸 텍사스 도시는 번창해 나갔다. 상황은 많이 호전되었고 전반적으로 다소 안정적인 성장기를 갖기 시작했다.<br />
        <br />
        그러나 성장할수록 제이크는 이보다 더 많은 것을 원하게 되었다. 그가 아끼는 사람들과 자원을 지키기 위해선 더 많은 군사력이 필요했고, 더 많은 첨단 기기가 필요했다.<br />
      </Description>
      <Margin />
      <Image src={Images.FIDELION_C_B} />
      <Margin />
      <Description>
      제이크는 결국 주변 마을을 습격하여 이들을 강제로 그들의 세력에 합병시키고 강제적으로 노역을 시키기에 이른다. 그의 주변에 있던 사람들은 그의 욕심이 이미 예전과는 다르게 지나치게 과해졌다는 사실을 이미 눈치채고 있었으나, 그의 치밀하고 용의주도한 리더십에 종국에는 그에게 절대복종하게 된다.
      </Description>
      <Margin />
      <Margin />
      <Divider />
      <Margin />
      <Description>
      초기에는 마을에 대해 우대하는 것 같은 태도를 보이던 제이크 군대는, 점차 이들을 식민지 대하듯이 대하기 시작했다. 이들에게 공격받아 강제 합병된 마을은 결국 건장한 남성들은 노예와 군인으로, 여성과 아이들은 일꾼과 노예로 팔려나가기 시작하기에 이른다.
      </Description>
      <Margin />
      <Image src={Images.FIDELION_C_C} />
      <Margin />
      <Margin />
      <Description>
      피델리아 제국의 안정화와 함께 구축된 "피델리온"은 석유를 추출하는 건물 그 자체를 의미한다.   피델리온은 사회적 지위가 사다리의 위치에 따라 결정되는 수직 사회로 구성되어 있는데, 이는 요새이자 석유 시추 장치로, 피델리아의 중심에 서 있으며 세 기둥에 의해 지지되고 있었다. 지속적으로 석유를 추출하는 본 시설은 사실상 그 어떤 것보다 더 높은 가치를 가지고 있다고 봐야한다.<br />
        <br />
        제이크의 방 역시 본 건물 안에 존재한다. 그의 방은 각각 피델리온의 중간과 맨 위에 위치해 있었고, 그의 발코니에서는 도시와 그의 백성을 조망할 수 있었다. 이 전망대에서 그는 성명을 내리고 사치스러운 생활을 영위하는 등 지배자로서의 삶을 이어가고 있다.<br />
      </Description>
      <Margin />
      <C1>
      <Divider />
        <Content>
          <Description>
          피델리아 군대는 상당히 잘 훈련되어 있고, 그 어떠한 위협에도 대응할 준비가 되어 있었다. 그러나 대중들은 피델리아 군대에 대한 이해도가 매우 제한되어 있는데, 이는 다분히 의도된 구조라고 할 수 있다. 피델리아 군대는 고유한 문화, 언어, 그리고 군사적 관행을 갖추고 있으며, 군사 문화에 대한 경험이 거의 없거나 전혀 없는 사람들에게는 압도적이고 엄격하며 위협적으로 보일 수 있다.
          </Description>
        </Content>
      </C1>
      <C2>
      <Divider />
      <Image src={Images.FIDELION_D_B} />
      <Margin />
        <Content>
          <Description>
          여러 해 동안, 피델리아 제국은 공포, 위협, 그리고 폭정을 통해 국가를 지배했으며, 혹독하게 훈련을 받은 군인들을 통해 북아메리카 전역에 우위를 확립했다. 코삭스와 헌터즈와 같은 강력한 동맹의 지원까지 가세하여 제이크 마커스의 현 독재 체제는 멈출 기미가 없었으며 아무도 그의 권력에 도전하는 사람이 없었다.
          </Description>
          <Image src={Images.FIDELION_D_D} />
          <Description>
          강력한 군사 체제를 갖추는 데에는 로안 프레드릭 장군과 셀린 아델 장군이 상당히 중요한 역할을 한다.
          </Description>
          <Margin />

          <Description>
          로안은 전쟁 이전부터 제이크의 오른팔로서  그를 섬겨왔으며, 여전히 피델리아 제국에서 최고의 전략가로 여겨진다.         
          </Description>
          <Margin />
          <Description>
          피델리아 확장 초기 작은 마을에서 발견된 셀린은 제이크의 주목을 받아 군사 경험이 전혀 없었으나 빠르게 피델리아에서 주목받는 최고 권력의 인물이 되었다.    
          </Description>
        </Content>
      </C2>
      <Margin />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #000;
  font-family: Noto Serif KR;
`

const Section = styled.div`
  background-size: cover;
  padding: 48px 0;
`

const Content = styled.div`
 width: 100%;
 box-sizing: border-box;
`

const C1 = styled(Section)`
  width: 100%;
  height: 3200px;
  background: url(${Images.FIDELION_D_A});
  padding-top: 32px;
  box-sizing: border-box;
`

const C2 = styled(Section)`
  width: 100%;
  padding-top: 32px;
  box-sizing: border-box;
`

const Image = styled.img`
  width: 100%
`

const Description = styled.p`
  box-sizing: border-box;
  padding: 0 20px;
  color: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
`

const Margin = styled.div`
  height: 16px
`
const Divider = styled.div`
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  margin: 16px 20px;
`





export default Fidelion_C_KR;