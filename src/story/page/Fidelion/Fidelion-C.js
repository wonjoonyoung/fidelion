import React from "react";
import styled from 'styled-components';
import { Images } from "../../asset/images";

function Fidelion_C () {
  return (
    <Container>
      <Image src={Images.FIDELION_C_A} />
      <Margin />
      <Description>
        The oil city of Texas that Jake discovered was thriving and had experienced significant improvement, entering a
        period of stable growth.<br />
        <br />
        However, as he grew older, Jake wanted more and sought to acquire military power and advanced technology to
        protect his people and resources.<br />
      </Description>
      <Margin />
      <Image src={Images.FIDELION_C_B} />
      <Margin />
      <Description>
        To achieve this, he began raiding surrounding villages and forcing them to join his army and work for him.
        Although people noticed that his greed had become excessive, they still followed him due to his effective
        leadership.
      </Description>
      <Margin />
      <Margin />
      <Divider />
      <Margin />
      <Description>
        Over time, Jake began to treat the villages as colonies, attacking and annexing them, forcing the men to become
        slaves and soldiers, and the women and
      </Description>
      <Margin />
      <Image src={Images.FIDELION_C_C} />
      <Margin />
      <Margin />
      <Description>
        Fidelion is organized as a vertical society, with social status determined by one's position on the ladder. It
        serves as both a fort and an oil drilling device, standing at the center of Fidelia and supported by three
        pillars. It continuously extracts oil, which is considered as valuable as gold by Jake Marcus and everyone else.<br />
        <br />
        The Jake's room is located in the middle and top of Fidelion, respectively, and Jake can oversee the city and
        its people from his balcony. From this vantage point, he makes announcements, lives extravagantly, and wields
        control over this engineering masterpiece.<br />
      </Description>
      <Margin />
      <C1>
      <Divider />
        <Content>
          <Description>
          The Fidelian army is well-trained and prepared to face any threat.
          However, the general public's understanding of the Fidelian military is limited to what they have been taught.
          The Fidelian army has its own unique culture, language, and military practices, and may seem overwhelming, strict,
          and intimidating to those who have had little or no exposure to military culture.
          </Description>
        </Content>
      </C1>
      <C2>
      <Divider />
      <Image src={Images.FIDELION_D_B} />
      <Margin />
        <Content>
          <Description>
          For years, the Fidelian Empire ruled through fear, intimidation, and tyranny, using highly trained soldiers to establish dominance across North America.
          But, with the support of powerful allies such as the Kossacks and Hunters, Jake Marcus' regime was unstoppable, and no one dared to challenge it.
          </Description>
          <Image src={Images.FIDELION_D_D} />
          <Description>
          In the background of this robust military regime, General Rowan Frederik and General Celine Adelle played prominent roles.
          </Description>
          <Margin />

          <Description>
          Even before the war, Rowan had served as Jake's right-hand man and is still considered the best tactician in the Fidelian Empire.          </Description>
          <Margin />
          <Description>
          Celine, discovered in a small village, caught Jake's attention and quickly rose to prominence in Fidelia despite having no military experience.          </Description>
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







export default Fidelion_C;

