import React from "react";
import styled from 'styled-components';
import { Images } from "../../asset/images";

function Fidelion_C_KR () {
  return (
    <Container>
      <Image src={Images.FIDELION_C_A} />
      <Margin />
      <Description>
      ジェイクが発見したテキサスの石油都市は繁栄し、大幅な発展を遂げる、安定成長期に入っていました。しかし、成長するにつれて、ジェイクはより多くのことを望み、人々と資源を守るために軍事力と高度な技術を獲得しようと努めました。
      </Description>
      <Margin />
      <Image src={Images.FIDELION_C_B} />
      <Margin />
      <Description>
      これを達成するために、彼は周囲の村を襲撃し始め、彼らを軍隊に参加させて彼のために働かせました。人々は彼の貪欲さが過剰になっていることに気づきましたが、それでも彼の効果的なリーダーシップのおかげで彼に従いました      </Description>
      <Margin />
      <Margin />
      <Divider />
      <Margin />
      <Description>
      時間が経つにつれて、ジェイクは村を植民地として扱うようになり、攻撃して併合し、男性が奴隷や兵士に、女性と子供が労働者や奴隷になるよう強制しました      </Description>
      <Margin />
      <Image src={Images.FIDELION_C_C} />
      <Margin />
      <Margin />
      <Description>
      フィデリオンは縦社会として組織されており、社会的地位ははしご上の位置によって決まります。フィデリアの中心に位置し、3本の柱で支えられた要塞兼石油掘削装置。として金と同等の価値があるとされる石油は、ジェイク・マーカスらによって継続的に採掘されています。ジェイクの部屋はそれぞれフィデリオンの真ん中と頂上にあり、ジェイクはバルコニーから街とその人々を見ることができます。この有利な地点から、彼はアナウンスを行い、贅沢な生活を送り、このエンジニアリングの傑作を制御しています。
      </Description>
      <Margin />
      <C1>
      <Divider />
        <Content>
          <Description>
          フィデリア軍はよく訓練されており、あらゆる脅威に直面する準備ができています。しかし、フィデリア軍についての一般大衆の理解は、教えられてきたことに限られています。さらに、フィデリア軍には独自の文化、言語、軍事習慣があります。したがって、軍事文化にほとんどまたはまったく触れたことがない人にとっては、圧倒的で、厳格で、威圧的に見えるかもしれません。
          </Description>
        </Content>
      </C1>
      <C2>
      <Divider />
      <Image src={Images.FIDELION_D_B} />
      <Margin />
        <Content>
          <Description>
          フィデリア帝国は長年にわたり、恐怖、脅迫、圧政によって統治し、高度に訓練された兵士を使って北米全土の支配を確立しました。しかし、コサックやハンターなどの強力な同盟国の支援により、ジェイク・マーカス政権を止めることはできず、それにあえて挑戦しようとする者は誰もいませんでした。          </Description>
          <Image src={Images.FIDELION_D_D} />
          <Description>
          この強固な軍事政権の背景で、ローワン・フレデリク将軍とセリーヌ・アデル将軍が重要な役割を果たしました          </Description>
          <Margin />

          <Description>
          戦前でさえ、ローワンはジェイクの右腕として働いており、今でもフィデリア帝国で最高の戦術家とみなされています。          </Description>
          <Margin />
          <Description>
          小さな村で発見されたセリーヌはジェイクの注意を引き、軍隊経験がないにもかかわらず、すぐにフィデリアで有名になりました。          </Description>
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