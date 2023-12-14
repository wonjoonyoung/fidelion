import React from "react";
import styled from 'styled-components';
import FooterBtn from "../../common/FooterBtn.js";
import About_introKR from "./About-intro_KR.js";
import AboutTextKR from "./About-A_KR.js";
import ScrollToTopButton from "../../common/Scroll-top";
import Header from "../../common/Header";






function AboutPage() {
  const nextChapterPath = "/ko/fidelion"
  const NextChapter = "Go to Fidelion Page";
  const lan = "KR"
  const lanPageEn = "/about"
  const lanPageKo = "/ko/about"
  const lanPageJp = "/jp/about"

// lanPageKo, lanPageJp

  return (
    <div>
    <Header  lan={lan} lanPageEn={lanPageEn} lanPageKo={lanPageKo} lanPageJp={lanPageJp}/>
    <About_introKR  />
    <AboutTextKR  />
    <FooterBtn buttonLabel={NextChapter} nextChapterPath={nextChapterPath} />
    <ScrollToTopButton  />
    </div>
  );

}


export default AboutPage;
