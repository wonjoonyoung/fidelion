import React from "react";
import styled from 'styled-components';
import FooterBtn from "../../common/FooterBtn.js";
import About_introJP from "./About-intro_JP.js";
import AboutTextJP from "./About-A_JP.js";
import ScrollToTopButton from "../../common/Scroll-top";
import Header from "../../common/Header";






function AboutPage() {
  const nextChapterPath = "/jp/fidelion"
  const NextChapter = "Go to Fidelion Page";
  const lan = "JP"
  const lanPageEn = "/about"
  const lanPageKo = "/ko/about"
  const lanPageJp = "/jp/about"
// lanPageKo, lanPageJp

  return (
    <div>
    <Header  lan={lan} lanPageEn={lanPageEn} lanPageKo={lanPageKo} lanPageJp={lanPageJp}/>
    <About_introJP  />
    <AboutTextJP  />
    <FooterBtn buttonLabel={NextChapter} nextChapterPath={nextChapterPath} />
    <ScrollToTopButton  />
    </div>
  );

}


export default AboutPage;
