import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Images } from '../asset/images';
import { useNavigate } from 'react-router-dom';
import MenuPage from '../common/MenuPage';
import Dropdown from '../common/Dropdown';

export const Header = ({lan, lanPageEn, lanPageKo, lanPageJp, fidelionMenu}) => {
  const navigate = useNavigate();
  const [flipped, setFlipped] = React.useState(true);
  const [dropdown, setDropdown] = React.useState(true);
  const dropdownRef = useRef(null);


  const onClick = () => {
    setFlipped((current) => !current);
    setDropdown(true);
  };

  const dropdownLanguage = () => {
    setDropdown((current) => !current);
    setFlipped(true);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdown(true);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('scroll', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('scroll', handleOutsideClick);
    };
  }, []);

  return (
    <Container ref={dropdownRef}>
      <LanguageChoice onClick={dropdownLanguage}>
        <Language>{lan}</Language>
        <LanguageChoiceIcon src={Images.HEADER_ARROW} />
      </LanguageChoice>
      <Logo src={Images.HEADER_LOGO} onClick={() => navigate('/')} />
      <Menu onClick={onClick} src={flipped ? Images.HEADER_MENU : Images.HEADER_CLOSE} />
      {!flipped && <MenuPage />}
      {!dropdown && <Dropdown lanPageEn={lanPageEn} lanPageKo={lanPageKo} lanPageJp={lanPageJp}/>}
    </Container>
  );

};

const Container = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  position: fixed;
  top: 0;
  background-color: #000;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 20px;
  border-bottom: 1px solid #dcdcdc;
  z-index: 99;
`;

const LanguageChoice = styled.div`
  width: 36px;
`;

const Language = styled.span`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;

const LanguageChoiceIcon = styled.img`
  width: 12px;
`;

const Logo = styled.img`
  width: 70px;
`;

const Menu = styled.img`
  width: 24px;
`;

export default Header;
