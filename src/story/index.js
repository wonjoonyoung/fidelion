import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
// import { Loading } from "./page/main/Loading";
import { Header } from "./common/Header";
import FidelionPage from "./page/Fidelion/index";
import HarrierPage  from "./page/Harrier/index";
import UtilityPage from "./page/Utility/index";
import AboutPage  from "./page/About/About";
// import { useStoryContext } from "../context/StoryContext";
// import { HarrierDetailPage } from "./page/harrier/detail";
import { useEffect } from "react";
// import { MenuPage } from "./common/MenuPage";
// import { Floating } from "./common/Floating";

export function StoryPage() {
  // const { header } = useStoryContext()
  // const { loading, load, header } = useStoryContext()

  // useEffect(() => {
  //   load()
  // }, [])

  // if (loading) {
  //   return (
  //     <Container>
  //       {/* <Loading /> */}
  //     </Container>
  //   )
  // }  


  return (
    <Container>
      {/* <Floating />
      <Header /> */}
      <Content>
        {/* {header.opened && (<MenuPage />)} */}
        <Routes>
          {/* <Route path={"/"} element={<MainPage />} /> */}
          <Route path={"/"} element={<FidelionPage />} />
          <Route path={"/harrier"} element={<HarrierPage />} />
          {/* <Route path={"/harrier/:id"} element={<HarrierDetailPage />} /> */}
          <Route path={"/utility"} element={<UtilityPage />} />
          <Route path={"/about"} element={<AboutPage />} />
        </Routes>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  flex: 1;
  position: relative;
`


export default StoryPage;