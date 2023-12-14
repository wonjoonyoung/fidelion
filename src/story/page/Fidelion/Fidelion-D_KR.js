import React from "react";
import styled from 'styled-components';
import { Images } from "../../asset/images";

function Fidelion_D_KR () {
  return (
    <Container>
        <Margin  />
        <Image src={Images.FIDELION_E_A} />
        <Image src={Images.FIDELION_E_B} />
        <Margin  />
       <Content>
        <Description>
        제이크의 지휘 아래, 피델리아의 군 보좌관과 최고의 엔지니어들은 더욱 진보된 군사 기술을 개발하였다. 그리고 마침내 '티탄'이라 불리는 강력하고 파괴적인 이족보행 전투 무기를 만들어 냈다.        </Description>
        <Image src={Images.FIDELION_E_C} />
        <Margin  />
        <Description>
        본 이족보행 기계는 사실상 피델리아 제국의 강력한 무기로, 전면에는 단일한 연장형 포와 두 개의 기관총을 장착하고 있다. 이는 엔진과 디젤로 구동되며, 피델리아 제국의 최전선에서 적을 유린하곤 한다.        </Description>
        <Image src={Images.FIDELION_E_D} />
        <D1>
            <Image src={Images.FIDELION_E_E} />
            <Description>
            종종 권력층이 사용하는 피델리아의 붉은 가스 마스크는 비인간화적이고 억압적이며 악랄한 체제를 상징하는 것으로도 보인다. 어떤 면으로는 권력 구조 아래에 억압당하는 국민들을 표방하기도 하는 것 같다. 피델리아에서 가스 마스크의 사용은 보는 사람으로 하여금 공포의 감정과 폭력 및 권력에 대한 열망을 시사하기도 한다.            </Description>
        </D1>
        <Margin  />
        <Image src={Images.FIDELION_E_F} />
        <Margin  />
        <Description>
        피델리아의 군인들과 해리어들은 그들의 정체성을 보호하거나 적들에게 공포를 심어주기 위해 가스 마스크를 쓴다. 빨간색은 죽음, 피, 그리고 전쟁을 연상시킨다.        </Description>
      </Content>
      <Margin  />
      <Image src={Images.FIDELION_E_G} />
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

const D1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  > img {
    width: 160px;
    margin-right: 16px
  }

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


export default Fidelion_D_KR;

