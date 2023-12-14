import React from "react";
import styled from 'styled-components';
import FooterBtn from "../../common/FooterBtn.js";
import About_intro from "./About-intro.js";
import AboutText from "./About-A.js";
import ScrollToTopButton from "../../common/Scroll-top";
import Header from "../../common/Header";






function AboutPage() {
  const nextChapterPath = "/fidelion"
  const NextChapter = "Go to Fidelion Page";
  const lan = "EN"
  const lanPageEn = "/about"
  const lanPageKo = "/ko/about"
  const lanPageJp = "/jp/about"

// lanPageKo, lanPageJp

  return (
    <div>
    <Header  lan={lan} lanPageEn={lanPageEn} lanPageKo={lanPageKo} lanPageJp={lanPageJp}/>
    <About_intro  />
    <AboutText  />
    <FooterBtn buttonLabel={NextChapter} nextChapterPath={nextChapterPath} />
    <ScrollToTopButton  />
    </div>
  );

}


export default AboutPage;
