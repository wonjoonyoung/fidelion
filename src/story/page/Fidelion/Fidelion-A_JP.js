import React from "react";
import styled from 'styled-components';
import { Images } from "../../asset/images";

function Fidelion_A_KR () {
  return (
    <Container>
      <A1>
        <Content>
          <Title>
          昔から現在に至るまで、戦争は結局、人間の内面の闇が表出した結果に過ぎない。
          </Title>
          <Description>
          核兵器の無差別使用は世界を大きく変えました。社会や文明を支えていた制度は機能しなくなり、世界は無法地帯に陥りました。生き残った人々は戦後、生き残るために苦労し、人類の94％が大きな苦しみを味わいました。幸運にも地下壕に避難できた者もいれば、事前に準備をしていた者もいましたが、全員が生き残るために必死でした。戦争はしばしば怒りによって引き起こされますが、それが引き起こす苦痛は永遠に続きます。
          </Description>

          <Image src={Images.FIDELION_A1_A} />
        </Content>
      </A1>

      <A2>
        <Content>
          <Divider />
          <Description>
          戦前、ジェイク・マーカスは裕福な家庭の典型的な子供でした。彼は特権的な見方を持って育てられ、自分の社会サークル外の人々とつながることが困難でした。しかし、成長するにつれて、彼は正義についての疑問に取り組み、人生の目的を見つけるのに苦労しました。          </Description>
          <Image src={Images.FIDELION_A2_A} />
          <Description>
          ジェイクの歪んだ思考は、昆虫や動物に対する残酷な行動として現れました。しかし、彼は聡明であり、天性の芸術的才能も持っていました。彼は特に、母親がよく演奏してくれたベートーベンの唯一のオペラ「フィデリオ」を聴くのが好きでした。          </Description>
        </Content>
      </A2>

      <A3>
        <Content>
          <Divider />
          <Description>
          ジェイクが5歳のとき、核戦争が勃発し、両親とともに地下壕に避難し、そこで厳重な管理のもと15年間暮らしました。          </Description>
          <Description>
          ジェイクは、以前は同年代で最も聡明な子供ではありませんでしたが、この人類の悲劇的な出来事によって、笑顔、子供らしさ、そして幸福感を失いました。それ以来、彼は人生の意味を理解するのに苦労しました。          </Description>
        </Content>
        <Image src={Images.FIDELION_A3_A} />
        <Content>
          <Description>
          ある日、物資不足により暴動が勃発しました。ジェイクは暴動を起こすつもりはありませんでしたが、暴動を起こす役割を果たし、反乱軍のリーダーとなりました。彼は物資と武器を持って地下壕から現れ、その後に人々のグループが続きました。          </Description>
        </Content>
      </A3>

      <A4>
        <Content>
          <Divider />
          <Description>
          ジェイクと彼の支持者たちは、石油が生き残る人類にとって重要な資源となることに気づきました。核戦争による強力なEMPの影響で、あらゆる電子機器が機能を停止していた。その結果、電子機器に依存していた戦前の内燃機関のほとんどは使用できなくなりました。しかし、機械制御装置を備えた機械は知識を保存しており、古いエンジンを設置して生産に使用することができました。食料の生産と並んで、これらのエンジンを動かすための燃料の供給を確保することが、人類の生存にとって最優先事項となりました。長い旅の後、ジェイクと彼の信者たちは石油掘削作業を再開し、新しい文明を確立しました。          </Description>
          <Image src={Images.FIDELION_A4_A} />
          <Description>
          しかし、彼らの定住は、村を脅迫して攻撃し、貴重な資源を盗み出した山賊やギャングによって妨害されました。正義をもたらすことを決意したジェイクは、復讐心を動機とし、さまざまな戦略を駆使して、小グループの兵士を率いて山賊との戦いを行いました。村人たちのサポートを受けて、ジェイクは自分の力と能力のすべてを使って目標を達成しました。          </Description>
          <Description>
          フィデリアでは上流階級と下層階級の間には厳格な分断があり、ジェイクの軍隊は下層階級をその地位に留め、台頭するのを阻止するために働いています。軍はこのルールを利用して、都市に対する軍の強さと優位性を誇示します。          </Description>
        </Content>
      </A4>

      <A5>
        <Content>
          <Divider />
          <Description>
          ロゴの上部は石油工場を表しており、フィデリアはその下の地面から石油を抽出して処理しています。          </Description>
          <Image src={Images.FIDELION_A5_A_JP} />
          <Description>
          ロゴの左下隅には労働者、中央には石油を輸送するパイプ、右隅には軍隊と兵士が描かれています。これらの3本のバーは、フィデリオンが受けているサポートを表しています。          </Description>
        </Content>
      </A5>
      <Margin />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  font-family: Noto Serif KR;
`

const Section = styled.div`
  background-size: cover;
  padding: 48px 0;`

const Title = styled.p`
  color: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 125% */
`

const Description = styled.p`
  color: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-top: 20px;
`

const Content = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
`

const Image = styled.img`
  margin-top: 16px;
  width: 100%;
`

const Margin = styled.div`
  height: 48px;
`

const A1 = styled(Section)`
  width: 100%;
  background: url(${Images.FIDELION_A1_BACKGROUND});
  padding-top: 32px;
  box-sizing: border-box;
`

const A2 = styled(Section)`
  width: 100%;
  background: url(${Images.FIDELION_A2_BACKGROUND});
  padding-top: 32px;
  box-sizing: border-box;
`

const A3 = styled(Section)`
  width: 100%;
  background: url(${Images.FIDELION_A3_BACKGROUND});
  padding-top: 32px;
  box-sizing: border-box;
`

const A4 = styled(Section)`
  width: 100%;
  background: url(${Images.FIDELION_A4_BACKGROUND});
  box-sizing: border-box;
`

const A4B = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  box-sizing: border-box;
  padding-right: 20px;
  margin-top: 48px;

  > img {
    width: 172px;
  }

  > p {
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 128.571% */
    white-space: pre-wrap;
    flex: 1;
  }
`

const Divider = styled.div`
  border-bottom: 0.5px solid #fff;
  margin-bottom: 16px;
`

const A5 = styled(Section)`
  width: 100%;
  box-sizing: border-box;
`


export default Fidelion_A_KR;