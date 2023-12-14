import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { loadImage } from "../../../untill/load-image";
import { useScrollUpAdapter } from "../../../hook/useScrollUpAdapter";
import { useRef } from "react";
import Header from "../../common/Header";
import FooterBtn from "../../common/FooterBtn";



async function loadHarrierPages() {
  for (const it of Object.values(pages)) {
    await loadImage(it.banner);
    await loadImage(it.content);
  }
}
  
  const pages = {
    A: { content: require("../../asset/harrier_detail/A_kr.png"), banner: require("../../asset/harrier_banner/A.png") },
    B: { content: require("../../asset/harrier_detail/B_kr.png"), banner: require("../../asset/harrier_banner/B.png") },
    C: { content: require("../../asset/harrier_detail/C_kr.png"), banner: require("../../asset/harrier_banner/C.png") },
    D: { content: require("../../asset/harrier_detail/D_kr.png"), banner: require("../../asset/harrier_banner/D.png") },
    E: { content: require("../../asset/harrier_detail/E_kr.png"), banner: require("../../asset/harrier_banner/E.png") },
    F: { content: require("../../asset/harrier_detail/F_kr.png"), banner: require("../../asset/harrier_banner/F.png") },
    G: { content: require("../../asset/harrier_detail/G_kr.png"), banner: require("../../asset/harrier_banner/G.png") },
    H: { content: require("../../asset/harrier_detail/H_kr.png"), banner: require("../../asset/harrier_banner/H.png") },
    I: { content: require("../../asset/harrier_detail/I_kr.png"), banner: require("../../asset/harrier_banner/I.png") },
  };
  
  function HarrierDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const ref = useRef(null);
    useScrollUpAdapter(ref);
  
    function goBack() {
      navigate("/harrier");
    }
  
    if (!id) return <Container />;
    const page = pages[id.toUpperCase()];
    if (!page) return <Container />;

    const nextChapterPath = "/ko/harrier"
    const NextChapter = "뒤로가기";

    const lan = "KR"
    const lanPageEn = `/harrier/${id.toUpperCase()}`;
    const lanPageKo = `/ko/harrier/${id.toUpperCase()}`;
    const lanPageJp = `/jp/harrier/${id.toUpperCase()}`;
  
    return (
      <Container>
    <Header  lan={lan} lanPageEn={lanPageEn} lanPageKo={lanPageKo} lanPageJp={lanPageJp}/>
        <Content ref={ref}>
          <Page src={page.content} />
          <FooterBtn buttonLabel={NextChapter} nextChapterPath={nextChapterPath} />
        </Content>
        <Banner src={page.banner} />

      </Container>
    );
  }

  
  const Container = styled.div`
    width: 100%;
    height: 100%;
    background: #fff;
  `;
  
  const Content = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  `;
  
  const Page = styled.img`
    margin-top: 440px;
    width: 100%;
  `;
  
  const Banner = styled.img`
    margin-top: 40px;
    width: 100%;
    height: 400px;
  `;


export default HarrierDetailPage