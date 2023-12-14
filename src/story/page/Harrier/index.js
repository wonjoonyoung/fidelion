import React from "react";
import styled from 'styled-components';
import HARRIER_CARD from "./Harrier-CARD";
import FooterBtn from "../../common/FooterBtn";
import Harrier_intro from "./Harrier-intro";
import Header from "../../common/Header";
import ScrollToTopButton from "../../common/Scroll-top";





function HarrierPage() {
  const nextChapterPath = "/utility"
  const NextChapter = "Next Chapter";
  const lan = "EN"
  const lanPageEn = "/harrier"
  const lanPageKo = "/ko/harrier"
  const lanPageJp = "/jp/harrier"


  return (
    <div>
    <Header  lan={lan} lanPageEn={lanPageEn} lanPageKo={lanPageKo} lanPageJp={lanPageJp}/>
    <Harrier_intro  />
    <HARRIER_CARD  />
    <FooterBtn buttonLabel={NextChapter} nextChapterPath={nextChapterPath} />
    <ScrollToTopButton  />
    </div>
  );
}


export default HarrierPage;
