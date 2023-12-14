import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import "./css/scroll.css"
import { BrowserRouter } from "react-router-dom";
import  App  from "./App";
import { StoryContextProvider } from "./context/StoryContext";
import { BgmContextProvider } from "./context/BcmContext";

const root = ReactDOM.createRoot(
  document.getElementById('root'),
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
       <BgmContextProvider>
        <StoryContextProvider>
          <App />
         </StoryContextProvider>
      </BgmContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
