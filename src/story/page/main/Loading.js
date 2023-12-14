import React, { useEffect } from "react";
import styled from "styled-components";
import { Images } from "../../asset/images";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // useHistory 대신 useNavigate 사용

const duration = 1.0;

export function Loading() {
  const navigate = useNavigate(); // useHistory 대신 useNavigate 사용

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // duration 이후에 /fidelion 페이지로 자동으로 이동
      navigate("/fidelion");
    }, duration * 1000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <Container>
      <Logo
        src={Images.LANDING_LOGO}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration }}
      />
      <Background
        src={Images.LANDING_BACKGROUND}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration }}
      />
      <Copyright>
        Copyrightⓒ2023 Fidelion<br />
        All rights reserved
      </Copyright>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled(motion.img)`
  display: block;
  z-index: 2;
  width: 208px;
  position: absolute;
  top: 40%;
`;

const Background = styled(motion.img)`
  position: absolute;
  top: 20%;
  z-index: 1;
  width: 100%;
`;

const Copyright = styled.p`
  position: absolute;
  bottom: 48px;
  color: #A1A1A1;
  font-size: 10px;
  font-weight: 400;
  text-align: center;
`;

export default Loading;
