import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useBlocker, useLocation } from 'react-router-dom';
import { Images } from "../asset/images";



export function Dropdown({ lanPageEn, lanPageKo, lanPageJp }) {
  const [display, setDisplay] = useState("flex");

  const onclick = () => {
    setDisplay("none");
  };


  return (
    <Container style={{ display: display }}>
      <ShortCuts>
        <ShortCutContainer>
          <StyledLink to={lanPageEn}>
            <MenuTitle onClick={onclick}>English</MenuTitle>
          </StyledLink>
        </ShortCutContainer>
        <ShortCutContainer>
          <StyledLink to={lanPageKo}>
            <MenuTitle onClick={onclick}>Korean</MenuTitle>
          </StyledLink>
        </ShortCutContainer>
        <ShortCutContainer>
          <StyledLink to={lanPageJp}>
            <MenuTitle onClick={onclick}>Japanese</MenuTitle>
          </StyledLink>
        </ShortCutContainer>
      </ShortCuts>

    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 40px;
  background: rgba(0, 0, 0, 0.9);
  z-index: 999;
  left : 20px;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 16px;
  padding-bottom: 16px;
`

const ShortCuts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`

const MenuTitle = styled.span`
  color: #FFF;
  font-size: 24px;
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
  padding: 0px 36px 8px 20px;
  align-items: center;

  > p {
    color: #FFF;
    font-size: 24px;
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


const Links = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 24px;
  padding: 12px 10px 16px 20px;
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

export default Dropdown;
