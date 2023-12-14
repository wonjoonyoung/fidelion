import React from "react";
import styled from 'styled-components';
import { Images } from "../../asset/images";

function Fidelion_A () {
  return (
    <Container>
      <A1>
        <Content>
          <Title>
            War is born from the dark corners of human nature.<br />
            - both past and present.
          </Title>
          <Description>
            The indiscriminate use of nuclear weapons had drastically changed the world. The systems that supported
            society<br />
            and civilization were no longer functioning, and the world was plunged into a state of lawlessness.<br />
            <br />
            The survivors struggled to survive in the aftermath of the war, and 94% of humanity suffered greatly. Some
            were<br />
            lucky enough to find shelter in underground bunkers, while others had prepared in advance, but all were
            desperate to survive<br />
            <br />
            War is often fueled by anger, but the pain it causes lasts forever.
          </Description>

          <Image src={Images.FIDELION_A1_A} />
        </Content>
      </A1>

      <A2>
        <Content>
          <Divider />
          <Description>
          Before the war, Jake Marcus was a typical child from a wealthy family.
          He was raised with a privileged perspective and had difficulty connecting with people outside his social circle.
          Yet, growing up, he grappled with questions about justice and struggled to find purpose in life.
          </Description>
          <Image src={Images.FIDELION_A2_A} />
          <Description>
          Jake's distorted thinking manifested in cruel behavior towards insects and animals.
          However, he was also intelligent and had a natural talent for art.
          He particularly enjoyed listening to Beethoven's only opera, "Fidelio," which his mother often played for him.
          </Description>
        </Content>
      </A2>

      <A3>
        <Content>
          <Divider />
          <Description>
            When Jake was five years old, a nuclear war broke out and he, along with his parents, took refuge in an
            underground bunker where they lived for 15 years under strict control.
          </Description>
          <Description>
            Jake was not the brightest kid of his age before, but through this tragic event of humanity, he lost his
            smile, childhood, and sense of happiness. From then on, he struggled to understand the meaning of life.
          </Description>
        </Content>
        <Image src={Images.FIDELION_A3_A} />
        <Content>
          <Description>
            One day, a riot broke out due to a shortage of resources. Jake, who did not intend to cause the riot, ended
            up playing a role in starting it and became the leader of the rebels. He emerged from the bunker with some
            supplies and weapons, followed by a group of people.
          </Description>
        </Content>
      </A3>

      <A4>
        <Content>
          <Divider />
          <Description>
          Jake and his followers realized that oil would be a crucial resource for the surviving human population.
          Due to the powerful EMPs from the nuclear war, all electronic devices had stopped functioning.
          As a result, most pre-war internal combustion engines that relied on electronic devices could not be used.
          However, machines with mechanical control devices preserved knowledge, and older engines could be installed and used for production.
          Ensuring a supply of fuel to run these engines, along with producing food, became a top priority for the survival of humanity.  
          </Description>
          <Image src={Images.FIDELION_A4_A} />
          <Description>
            After a long journey, Jake and his followers were able to establish a new civilization by restarting oil
            drilling operations. However, their settlement was disrupted by a group of bandits and gangsters who
            threatened and attacked their village, stealing valuable resources. Determined to bring justice, Jake led a
            small group of soldiers in a campaign against the bandits, using various strategies and motivated by a
            desire for revenge. With the support of the villagers, Jake used all of his strength and abilities to
            achieve his goals.
          </Description>
          <Description>
          In Fidelia, there is a strict division between the upper and lower classes,
          with Jake's army working to keep the lower class in its place and prevent them from rising.
          The military uses this rule to demonstrate its strength and superiority over the city.
          </Description>
        </Content>
      </A4>

      <A5>
        <Content>
          <Divider />
          <Description>
            The upper part of the logo represents the oil factory, where Fidelia extracts and processes oil from the
            ground beneath it.
          </Description>
          <Image src={Images.FIDELION_A5_A} />
          <Description>
            The workers are depicted in the lower left corner of the logo, the pipe that transports the oil is depicted
            in the middle, and the armies and soldiers are depicted in the right corner. These three bars represent the
            support that Fidelion receives.
          </Description>
        </Content>
      </A5>
      <Margin />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
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


export default Fidelion_A;

