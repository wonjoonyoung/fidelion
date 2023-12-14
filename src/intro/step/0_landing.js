import React, { useState, useEffect } from "react";
import { Images } from "../Images";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import styled from "styled-components";
import { Motion } from "../common/Motion";
import { useBgmContext } from "../../context/BcmContext";


const duration = 0.5;

export function Landing(args) {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);

  const bgm = useBgmContext()


function handleClick() {
  
  // setVisible(false); // 이 줄을 주석 처리하거나 삭제합니다.
}

useEffect(() => {
  if (!visible) {
    const timeoutId = setTimeout(() => {
      navigate('/intro');
    }, duration * 1000); // duration을 초(ms)로 변환

    return () => clearTimeout(timeoutId);
  }
}, [visible, navigate]);

  function handleClick() {
    setVisible(false);
  }

  // function onExit() {
  //   args.onNext();
  // }

  return (
    <Container onClick={handleClick}>


      <ContentContainer>
        <AnimatePresence
          // onExitComplete={onExit}
        >
          {visible && (
            <Motion
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.3 }}
              transition={{ duration }}
            >
              <Content>
                <img src={Images.LANDING_LOGO} width={208} alt={""} />
              </Content>
            </Motion>
          )}
        </AnimatePresence>
      </ContentContainer>

      <FloatingContainer>
        <FloatingColumn>
          <FloatingRow>
            <FloatMotion visible={visible} isLeft={true} isUp={true}>
              <FloatingImage src={Images.FLOAT_2} />
            </FloatMotion>
            <FloatMotion visible={visible} isUp={true}>
              <FloatingImage src={Images.FLOAT_0} />
            </FloatMotion>
          </FloatingRow>

          <FloatingRow>
            <FloatMotion visible={visible} isLeft={true}>
              <FloatingImage src={Images.FLOAT_8} />
            </FloatMotion>
            <FloatMotion visible={visible}>
              <FloatingImage src={Images.FLOAT_0} />
            </FloatMotion>
          </FloatingRow>
        </FloatingColumn>
      </FloatingContainer>
    </Container>
  );
}

function FloatMotion(args) {
  const vertical = args.isUp ? -150 : 150;
  const horizontal = args.isLeft ? -150 : 150;

  return (
    <div
      style={{
        paddingLeft: args.isLeft ? 24 : 0,
        paddingTop: args.isUp ? 48 : 0,
        paddingRight: !args.isLeft ? 24 : 0,
        paddingBottom: !args.isUp ? 48 : 0,
      }}
    >
      <AnimatePresence>
        {args.visible && (
          <Motion
            initial={{ opacity: 0.25, x: 0, y: 0 }}
            exit={{ opacity: 1, scale: 2, x: horizontal, y: vertical }}
            transition={{ duration: duration + 0.3 }}
          >
            {args.children}
          </Motion>
        )}
      </AnimatePresence>
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 가운데 정렬을 위해 추가 */
  justify-content: center; /* 가운데 정렬을 위해 추가 */
  margin-top: 38vh;
`;

const FloatingContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  pointer-events: none;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const FloatingRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FloatingColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const FloatingImage = styled.img`
  width: 96px;
  height: 96px;
`;

export default Landing;
