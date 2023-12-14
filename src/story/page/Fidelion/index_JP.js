import React from "react";
import styled from 'styled-components';
import Fidelion_A_JP from "./Fidelion-A_JP";
import Fidelion_B_JP from "./Fidelion-B_JP";
import Fidelion_C_JP from "./Fidelion-C_JP";
import Fidelion_D_JP from "./Fidelion-D_JP";
import FooterBtn from "../../common/FooterBtn";
import Fidelion_intro from "./Fidelion-intro";
import Header from '../../common/Header';
import ScrollToTopOnMount from "../../../hook/ScrollToTopOnMount";
import ScrollToTopButton from "../../common/Scroll-top";


function FidelionPage() {
  const nextChapterPath = "/jp/harrier"
  const NextChapter = "次のページ ";
  const lan = "JP"
  const lanPageEn = "/fidelion"
  const lanPageKo = "/ko/fidelion"
  const lanPageJp = "/jp/fidelion"



  return (
    <div onClick={onclick}>
    <ScrollToTopOnMount  />
    <Header  lan={lan} lanPageEn={lanPageEn} lanPageKo={lanPageKo} lanPageJp={lanPageJp} />
    <Fidelion_intro  />
    <Fidelion_A_JP  />
    <Fidelion_B_JP  />
    <Fidelion_C_JP  />
    <Fidelion_D_JP  />
    <FooterBtn buttonLabel={NextChapter} nextChapterPath={nextChapterPath} />
    <ScrollToTopButton  />
    </div>
  );
}



export default FidelionPage;
