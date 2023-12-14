import React from "react";
import styled from 'styled-components';
import UtilityKR from "./Utility-A_KR";
import FooterBtn from "../../common/FooterBtn";
import Utility_introKR from "./Utility-intro_KR";
import Header from "../../common/Header";
import ScrollToTopButton from "../../common/Scroll-top";



function UtilityPage() {
  const nextChapterPath = "/ko/about"
  const NextChapter = "Next Chapter";
  const lan = "KR"
  const lanPageEn = "/utility"
  const lanPageKo = "/ko/utility"
  const lanPageJp = "/jp/utility"

  return (
    <div>
    <Header  lan={lan} lanPageEn={lanPageEn} lanPageKo={lanPageKo} lanPageJp={lanPageJp}/>
    <Utility_introKR  />
    <UtilityKR  />
    <FooterBtn buttonLabel={NextChapter} nextChapterPath={nextChapterPath} />
    <ScrollToTopButton  />

    </div>
  );
}


export default UtilityPage;

