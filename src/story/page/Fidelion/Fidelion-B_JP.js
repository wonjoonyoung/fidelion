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
        ジェイクは北米最大の石油システムの1つを管理しています。彼は石油資源を利用してフィデリアの支配を維持しています。人々は生存状態に保たれており、2つの方法で反応します。彼らはリーダーに対して蜂起するか、他の懸念を忘れて受け取った数少ない貴重品だけに集中するかのどちらかです。フィデリアの下級国民には、生き残ること以外のことに集中する余裕はありません。
        </Description>
      </Content>

      <Image src={Images.FIDELION_B_B} />
      <Margin />
      <Content>
        <Description>
        世界には、上下、富裕層と貧困層、共存と分裂、秩序と混沌など、さまざまなバランスがあります。フィデリオンの建物の建築は、これらのさまざまな要素を受け入れ、収容することによってこのバランスを表しています。一見すると、フィデリアにおける認知システム、階級社会、割り当てられた役割は不安定で危険に見えるかもしれません。しかし、陰と陽のバランスがシステムを内部から支え、建築様式にも見られるように、彼らの社会では不安定なバランスが保たれています。
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

