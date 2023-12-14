import React from "react";
import styled from 'styled-components';
import Utility from "./Utility-A";
import FooterBtn from "../../common/FooterBtn";
import Utility_intro from "./Utility-intro";
import Header from "../../common/Header";
import ScrollToTopButton from "../../common/Scroll-top";



function UtilityPage() {
  const nextChapterPath = "/about"
  const NextChapter = "Next Chapter";
  const lan = "EN"
  const lanPageEn = "/utility"
  const lanPageKo = "/ko/utility"
  const lanPageJp = "/jp/utility"



  return (
    <div>
    <Header  lan={lan} lanPageEn={lanPageEn} lanPageKo={lanPageKo} lanPageJp={lanPageJp}/>
    <Utility_intro  />
    <Utility  />
    <FooterBtn buttonLabel={NextChapter} nextChapterPath={nextChapterPath} />
    <ScrollToTopButton  />

    </div>
  );
}


export default UtilityPage;

