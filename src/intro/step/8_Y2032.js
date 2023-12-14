import React from "react";
import { Images } from "./../Images";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FadeIn,  LeftIn, RightIn, Motion } from "./../common/Motion";

function IntroContents() {
    return (
      <Container>
        <Year>
          2032
        </Year>
        <Line />
        <First>
          <Text style={{ marginLeft: 20, marginTop: 24 }}>
            The situation resulted<br />
            in widespread malnutrition in 2032.<br />
          </Text>
          <Image src={Images.Y2032_FIRST} width={284} />
        </First>

        <Second>
          <Text>
            Survival was the only goal, <br />
            people did everything to survive. 2032
          </Text>
          <Image src={Images.Y2032_SECOND} width={284} style={{ alignSelf: "flex-end" }} />
        </Second>

        <Third>
              <Text>
                People raided the White House for answers<br />
                but no results. 2032
              </Text>
              <img src={Images.Y2032_THIRD} width={"100%"} alt={""} />
        </Third>
      </Container>
    );
  }

  const Year = styled.div`
  color: #B1B1B1;
  width: 100%;
  display: block;
  text-align: right;
  font-size: 20px;
  font-weight: 600;
  line-height: 26px; /* 130% */
  letter-spacing: -0.4px;
`;

const Line = styled.hr`
  width: 100%;
  height: 0.5px;  // height 속성 추가
  background-color: #646464;
  border: none;  // border 속성 추가 또는 border: 0; 으로 설정
  `;

  
  const Container = styled.div`
  padding: 40px 20px;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 32px;

  display: flex;
  flex-direction: column;
`

const Text = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`

const Image = styled.img`
  margin-top: 20px;
`

const First = styled.div`
  margin-top: 24px;
`

const Second = styled.div`
  align-self: flex-end;
  margin-top: 32px;
`

const Third = styled.div`
  position: relative;
  margin-top: 32px;
  height: 300px;
`

  


export default IntroContents;
