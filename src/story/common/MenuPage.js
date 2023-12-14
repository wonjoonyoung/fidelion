import React from "react";
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { Images } from "../asset/images";

export function HeaderPage({}) {
  const location = useLocation();

  const handleLinkClick = (path) => {
    if (location.pathname === path) {
      window.location.reload();
    }
  };

  return (
    <Container>
      <ShortCuts>
        <ShortCutContainer>
          <StyledLink to="/fidelion" onClick={() => handleLinkClick('/')}>
            <MenuImg src={Images.HEADER_ICON_2}/>
            <MenuTitle>Fidelion</MenuTitle>
          </StyledLink>
        </ShortCutContainer>
        <ShortCutContainer>
          <StyledLink to="/harrier" onClick={() => handleLinkClick('/harrier')}>
            <MenuImg src={Images.HEADER_ICON_0}/>
            <MenuTitle>Harrier</MenuTitle>
          </StyledLink>
        </ShortCutContainer>
        <ShortCutContainer>
          <StyledLink to="/utility" onClick={() => handleLinkClick('/utility')}>
            <MenuImg src={Images.HEADER_ICON_8}/>
            <MenuTitle>Utility</MenuTitle>
          </StyledLink>
        </ShortCutContainer>
        <ShortCutContainer>
          <StyledLink to="/about" onClick={() => handleLinkClick('/about')}>
            <MenuImg src={Images.HEADER_ICON_0}/>
            <MenuTitle>About</MenuTitle>
          </StyledLink>
        </ShortCutContainer>
      </ShortCuts>

      <Footer>
        <Links>
          <img src={Images.HEADER_TWITTER} alt={""} />
          <img src={Images.HEADER_DISCORD} alt={""} />
          <img src={Images.HEADER_FIGMA} alt={""} />
        </Links>
        <Information>
          <p className={"title"}>
            Terns and conditions
          </p>
          <p className={"label"}>marketing@tidalflats.studio</p>
          <p className={"copyright"}>
            Copyrightⓒ2023 Fidelion<br />
            All rights reserved
          </p>
        </Information>
      </Footer>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 40px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 999;
  right : 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ShortCuts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 48px;
`

const MenuImg = styled.img`
  width: 16px;
  height: 24px;
  margin-right: 24px;
`

const MenuTitle = styled.span`
  color: #FFF;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -0.96px;
  text-decoration: none;
  cursor: pointer;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ShortCutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 12px 20px 16px 44px;
  align-items: center;

  > p {
    color: #FFF;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: -0.96px;
  }

  > img {
    width: 16px;
    height: 24px;
  }
`

const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 48px;
`

const Links = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 24px;
  padding: 12px 20px 16px 20px;
  justify-content: center;
  align-items: center;

  img {
    width: 28px;
    height: 28px;
  }
`

const Information = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .title {
    color: #DBDBDB;
    text-align: center;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 1px;
    text-decoration-line: underline;
  }

  .label {
    color: #DBDBDB;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 1px;
  }

  .copyright {
    margin-top: 4px;
    color: #A1A1A1;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 1px;
  }
`

export default HeaderPage;
