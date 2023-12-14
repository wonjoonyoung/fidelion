import React from "react";
import styled from 'styled-components';
import HARRIER_CARD_KR from "./Harrier-CARD_KR";
import FooterBtn from "../../common/FooterBtn";
import Harrier_intro_KR from "./Harrier-intro_KR";
import Header from "../../common/Header";
import ScrollToTopButton from "../../common/Scroll-top";





function HarrierPageKR() {
  const nextChapterPath = "/ko/utility"
  const NextChapter = "다음페이지";
  const lan = "KR"
  const lanPageEn = "/harrier"
  const lanPageKo = "/ko/harrier"
  const lanPageJp = "/jp/harrier"


  return (
    <div>
    <Header  lan={lan} lanPageEn={lanPageEn} lanPageKo={lanPageKo} lanPageJp={lanPageJp}/>
    <Harrier_intro_KR  />
    <HARRIER_CARD_KR  />
    <FooterBtn buttonLabel={NextChapter} nextChapterPath={nextChapterPath} />
    <ScrollToTopButton  />
    </div>
  );
}


export default HarrierPageKR;
