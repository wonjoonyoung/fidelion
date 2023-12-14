import React from "react";
import styled from 'styled-components';
import { Images } from "../../asset/images";

function Fidelion_B_KR () {
  return (
    <Container>
       <Image src={Images.FIDELION_B_A} />
      <Content>
        <Divider />
        <Description>
        제이크는 북아메리카 전역을 통틀어 가장 거대한 석유 시스템을 통제 중이다. 당연하게도 이러한 석유 자원은 피델리아의 중심이라고 해도 과언이 아니다.<br />
          <br />
          제국에서 사는 일반 계층의 사람들은 두 가지 방식으로 이에 대응한다. 그들의 권력자에게 강하게 대항하는 것을 선택하거나, 깨끗이 포기하고 매일 받는 소량의 월급을 감사히 여기던가. 피델리아의 하류 계급 시민들은 생존 외의 어떤 것에도 주의를 기울일 여유가 없는 경우가 대부분이다.<br />
        </Description>
      </Content>

      <Image src={Images.FIDELION_B_B} />
      <Margin />
      <Content>
        <Description>
        세상에는 위와 아래, 부와 빈곤, 공존과 분열, 질서와 혼돈과 같은 여러 가지 정과 반 구조의 요소들이 존재한다. 피델리온 건물의 구조는 이러한 다양한 요소들을 포용하고 수용함으로써 이 균형을 반영하고 있다.<br />
          <br />
          얼핏 보기엔 피델리아의 인식 체계, 계급 사회, 그리고 지정된 역할들은 불안정하고 위험해 보일 수 있다. 그러나 음양의 균형은 이 시스템을 내부에서 지원하며 건축 양식에서도 볼 수 있어, 그들의 사회에서도 비록 불안하지만 어느정도 지속되는 균형을 달성했다. 이에 대한 평가는 개개인에 따라 달라질 가능성이 충분히 존재한다.<br />
        </Description>
        <Divider />
        <Image src={Images.FIDELION_B_C} />
        <div style={{ height: 20 }} />
        <Image src={Images.FIDELION_B_D} />
        <Copyright>
          Directed by Hokyo Lim
        </Copyright>
      </Content>

      <Margin />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  font-family: Noto Serif KR;
`

const Image = styled.img`
  width: 100%
`

const Content = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
`

const Divider = styled.div`
  margin-top: 36px;
  border-bottom: 0.5px solid #000;
  margin-bottom: 16px;
`

const Description = styled.p`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
`

const Margin = styled.div`
  height: 48px;
`

const Copyright = styled.p`
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 12px */
  letter-spacing: 1.44px;
  width: 100%;
  text-align: center;
  margin-top: 24px;
`

export default Fidelion_B_KR;

