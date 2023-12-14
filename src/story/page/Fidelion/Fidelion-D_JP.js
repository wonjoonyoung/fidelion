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
        ジェイクの指揮の下、補佐官で優秀な技術者がさらに高度な軍事技術を開発し、最終的にはタイタンとして知られる頑丈で破壊的な二足歩行兵器を生み出しました。        </Description>
        <Image src={Images.FIDELION_E_C} />
        <Margin  />
        <Description>
        この二本足の獣はフィデリア帝国の兵器庫への重要な追加物であり、前面に 1 つの拡張大砲と2つのビームライトを備えています。エンジンとディーゼルを動力とし、フィデリア帝国が敵との戦いに使用します。        </Description>
        <Image src={Images.FIDELION_E_D} />
        <D1>
            <Image src={Images.FIDELION_E_E} />
            <Description>
            フィデリアにおいて、ガスマスクは、非人道的、画一化した、抑圧的、極悪非道な個人や政権、あるいは権力構造に反対する個人を象徴しています。フィデリアのガスマスクは、恐怖、暴力、そして潜在的な破壊の暗示を呼び起こします。            </Description>
        </D1>
        <Margin  />
        <Image src={Images.FIDELION_E_F} />
        <Margin  />
        <Description>
        フィデリオンの物語では、兵士やハリアーは重大な結果から自分のアイデンティティを守るため、または敵に恐怖を植え付けるためにガスマスクを着用します。赤という色は死、血、戦争を連想させます。        </Description>
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

