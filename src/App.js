import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "./intro/step/0_landing";
import Intro from "./intro/index";


import Loading from "./story/page/main/Loading";

import Fidelion from "./story/page/Fidelion/index";
import FidelionKR from "./story/page/Fidelion/index_KR";
import FidelionJP from "./story/page/Fidelion/index_JP";



import Harrier from "./story/page/Harrier/index";
import HarrierKR from "./story/page/Harrier/index_KR";
import HarrierJP from "./story/page/Harrier/index_JP";

import Utility from "./story/page/Utility/index";
import UtilityKR from "./story/page/Utility/index_KR";
import UtilityJP from "./story/page/Utility/index_JP";



import About from "./story/page/About/About";
import AboutKR from "./story/page/About/About_KR";
import AboutJP from "./story/page/About/About_JP";



import ScrollToTopOnMount from "../src/hook/ScrollToTopOnMount";

import HarrierDetailPage  from "./story/page/Harrier/Harrier-detail";
import HarrierDetailPageKR  from "./story/page/Harrier/Harrier-detail_KR";
import HarrierDetailPageJP  from "./story/page/Harrier/Harrier-detail_JP";




function App() {



  return (
    <div>
        <ScrollToTopOnMount />
        <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/loading" element={<Loading />} />

          <Route path="/fidelion" element={<Fidelion />} />
          <Route path="/ko/fidelion" element={<FidelionKR />} />
          <Route path="/jp/fidelion" element={<FidelionJP />} />

          
          <Route path="/harrier" element={<Harrier />} />
          <Route path="/ko/harrier" element={<HarrierKR />} />
          <Route path="/jp/harrier" element={<HarrierJP />} />


          <Route path="/utility" element={<Utility />} />
          <Route path="/ko/utility" element={<UtilityKR />} />
          <Route path="/jp/utility" element={<UtilityJP />} />


          <Route path="/about" element={<About />} />
          <Route path="/ko/about" element={<AboutKR />} />
          <Route path="/jp/about" element={<AboutJP />} />

          <Route path={"/harrier/:id"} element={<HarrierDetailPage />} />
          <Route path={"ko/harrier/:id"} element={<HarrierDetailPageKR />} />
          <Route path={"jp/harrier/:id"} element={<HarrierDetailPageJP />} />

        </Routes>


    </div>
  );
}


export default App;


