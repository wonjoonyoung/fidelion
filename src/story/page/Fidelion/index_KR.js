import React from "react";
import styled from 'styled-components';
import Fidelion_A_KR from "./Fidelion-A_KR";
import Fidelion_B_KR from "./Fidelion-B_KR";
import Fidelion_C_KR from "./Fidelion-C_KR";
import Fidelion_D_KR from "./Fidelion-D_KR";
import FooterBtn from "../../common/FooterBtn";
import Fidelion_intro from "./Fidelion-intro";
import Header from '../../common/Header';
import ScrollToTopOnMount from "../../../hook/ScrollToTopOnMount";
import ScrollToTopButton from "../../common/Scroll-top";


function FidelionPage() {
  const nextChapterPath = "/ko/harrier"
  const NextChapter = "다음페이지";
  const lan = "KR"
  const lanPageEn = "/fidelion"
  const lanPageKo = "/ko/fidelion"
  const lanPageJp = "/jp/fidelion"




  return (
    <div onClick={onclick}>
    <ScrollToTopOnMount  />
    <Header  lan={lan} lanPageEn={lanPageEn} lanPageKo={lanPageKo} lanPageJp={lanPageJp}/>
    <Fidelion_intro  />
    <Fidelion_A_KR  />
    <Fidelion_B_KR  />
    <Fidelion_C_KR  />
    <Fidelion_D_KR  />
    <FooterBtn buttonLabel={NextChapter} nextChapterPath={nextChapterPath} />
    <ScrollToTopButton  />
    </div>
  );
}



export default FidelionPage;
