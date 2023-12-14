import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 추가
import Header from "./common/Header";
import IntroContents from "./step/1_landing";
import Y2023 from "./step/2_Y2023";
import Y2024 from "./step/3_Y2024";
import Y2025 from "./step/4_Y2025";
import Intermission from "./step/5_INTERMISSION";
import Y2030 from "./step/6_Y2030";
import Y2031 from "./step/7_Y2031";
import Y2032 from "./step/8_Y2032";
import Intermission2 from "./step/9_INTERMISSION2";
import Y2033 from "./step/10_Y2033";
import Y2054 from "./step/11_Y2054";
import Y2055 from "./step/12_Y2055";
import Last from "./step/14_last";

function Intro() {
  const navigate = useNavigate(); // useHistory 대신 useNavigate 사용
  const [showLastSection, setShowLastSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      // 사용자가 페이지의 맨 아래로 스크롤했는지 확인
      if (windowHeight + scrollPosition >= documentHeight) {
        setShowLastSection(true);
      }
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // 빈 의존성 배열은 이 효과가 한 번만 실행되도록 합니다.

  useEffect(() => {
    // showLastSection이 true가 되면 다른 페이지로 리디렉션합니다.
    if (showLastSection) {
      navigate("/loading"); // 실제로 이동하고 싶은 경로로 대체하세요.
    }
  }, [showLastSection, navigate]);

  return (
    <>
      <Header />
      <IntroContents />
      <Y2023 />
      <Y2024 />
      <Y2025 />
      <Intermission />
      <Y2030 />
      <Y2031 />
      <Y2032 />
      <Intermission2 />
      <Y2033 />
      <Y2054 />
      <Y2055 />
      <Last />
    </>
  );
}

export default Intro;
