import React from "react";
import styled from 'styled-components';
import Fidelion_A from "./Fidelion-A";
import Fidelion_B from "./Fidelion-B";
import Fidelion_C from "./Fidelion-C";
import Fidelion_D from "./Fidelion-D";
import FooterBtn from "../../common/FooterBtn";
import Fidelion_intro from "./Fidelion-intro";
import Header from '../../common/Header';
import ScrollToTopOnMount from "../../../hook/ScrollToTopOnMount";
import ScrollToTopButton from "../../common/Scroll-top";


function FidelionPage() {
  const nextChapterPath = "/harrier"
  const NextChapter = "Next Chapter";
  const lan = "EN"
  const lanPageEn = "/fidelion"
  const lanPageKo = "/ko/fidelion"
  const lanPageJp = "/jp/fidelion"


  // lanPageKo, lanPageJp



  return (
    <div onClick={onclick}>
    <ScrollToTopOnMount  />
    <Header  lan={lan} lanPageEn={lanPageEn} lanPageKo={lanPageKo} lanPageJp={lanPageJp}/>
    <Fidelion_intro  />
    <Fidelion_A  />
    <Fidelion_B  />
    <Fidelion_C  />
    <Fidelion_D  />
    <FooterBtn buttonLabel={NextChapter} nextChapterPath={nextChapterPath} />
    <ScrollToTopButton  />
    </div>
  );
}


export default FidelionPage;
