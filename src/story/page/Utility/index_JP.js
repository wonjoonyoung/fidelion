import React from "react";
import styled from 'styled-components';
import UtilityJP from "./Utility-A_JP";
import FooterBtn from "../../common/FooterBtn";
import Utility_introJP from "./Utility-intro_JP";
import Header from "../../common/Header";
import ScrollToTopButton from "../../common/Scroll-top";



function UtilityPage() {
  const nextChapterPath = "/jp/about"
  const NextChapter = "次のページ";
  const lan = "JP"
  const lanPageEn = "/utility"
  const lanPageKo = "/ko/utility"
  const lanPageJp = "/jp/utility"

  return (
    <div>
    <Header  lan={lan} lanPageEn={lanPageEn} lanPageKo={lanPageKo} lanPageJp={lanPageJp}/>
    <Utility_introJP  />
    <UtilityJP  />
    <FooterBtn buttonLabel={NextChapter} nextChapterPath={nextChapterPath} />
    <ScrollToTopButton  />

    </div>
  );
}


export default UtilityPage;

