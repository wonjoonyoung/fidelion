import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function FooterBtn({ nextChapterPath, buttonLabel }) {
  return (
    <Container>
      <Button to= {nextChapterPath}>
        <Label>{buttonLabel}</Label>
      </Button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 24px 20px;
  box-sizing: border-box;
`
const Button = styled(Link)`
  cursor: pointer;
  border: 1px solid #6A6A6A;
  border-radius: 4px;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-family: Charter, Noto Serif KR;
`
const Label = styled.p`
  color: #E1E1E1;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 114.286% */
  letter-spacing: 1.12px;`


export default FooterBtn;