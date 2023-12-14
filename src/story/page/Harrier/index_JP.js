import React from "react";
import styled from 'styled-components';
import HARRIER_CARD_JP from "./Harrier-CARD_JP ";
import FooterBtn from "../../common/FooterBtn";
import Harrier_intro_JP from "./Harrier-intro_JP";
import Header from "../../common/Header";
import ScrollToTopButton from "../../common/Scroll-top";





function HarrierPageKR() {
  const nextChapterPath = "/jp/utility"
  const NextChapter = "戻る";
  const lan = "JP"
  const lanPageEn = "/harrier"
  const lanPageKo = "/ko/harrier"
  const lanPageJp = "/jp/harrier"


  return (
    <div>
    <Header  lan={lan} lanPageEn={lanPageEn} lanPageKo={lanPageKo} lanPageJp={lanPageJp}/>
    <Harrier_intro_JP  />
    <HARRIER_CARD_JP  />
    <FooterBtn buttonLabel={NextChapter} nextChapterPath={nextChapterPath} />
    <ScrollToTopButton  />
    </div>
  );
}


export default HarrierPageKR;
