import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useLocation } from 'react-router-dom';


export function Header() {


  return (
    <Container>
      <Text>58 years of Fidelion</Text>

      <StyledLink to="/Loading">Skip</StyledLink>

    </Container>
  );
}

const Container = styled(motion.div)`
  z-index: 100;
  background-color : #000;

  position: fixed;
  top: 0;
  width: 100%;
  height: 48px;
  padding: 0 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.p`
  color: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;

const Label = styled.p`
  color: #858585;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default Header