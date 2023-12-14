import { createContext, useContext, useEffect, useState } from "react";
import { Images } from "../story/asset/images";
import { sleep } from "../untill/sleep"; // Corrected the path
import loadHarrierPages from "../story/page/Harrier/Harrier-detail";
import { useLocation, useNavigate } from "react-router-dom";
import useFlag from "../hook/useFlag";

export const steps = [
  "FIDELION",
  "HARRIER",
  "UTILITY",
  "ABOUT",
]

const MIN_LOAD_TIME = 1_500;

function useStoryState() {
  const navigate = useNavigate();

  const [step, setStep] = useState("FIDELION");
  const [loading, setLoading] = useState(true);
  const [menuOpened, setMenuOpened] = useState(false);

  const scrollUp = useScrollUp();

  const detailPage = `/story/${step.toLowerCase()}`

  function load() {
    Promise.all([Images.load(), sleep(MIN_LOAD_TIME)])
      .then(() => setLoading(false))
      .then(() => {
        loadHarrierPages().then(() => {
          console.log(`load harrier detail pages done.`);
        });
      });
  }

  console.log(menuOpened)
  
  return {
    loading,
    load,
    step: {
      current: step,
      move: setStep,
      open: () => navigate(detailPage),
    },
    header: {
      toggle: () => setMenuOpened(prev => !prev),
      close: () => setMenuOpened(false),
      opened: menuOpened,
    },
    scrollUp,
  }
}

function useScrollUp() {
  const { pathname } = useLocation();

  const [showScroll, setShowScroll] = useState(false);
  const flag = useFlag();

  useEffect(() => {
    setShowScroll(false);
  }, [pathname]);

  return {
    showButton: showScroll,
    goUp: () => flag.refresh(),
    setEnabled: setShowScroll,
    observe: flag.observe,
  };
}


const StoryContext = createContext(null);


export function StoryContextProvider(props) {
  const state = useStoryState();
  return (
    <StoryContext.Provider value={state}>
      {props.children}
    </StoryContext.Provider>
  );
}


export function useStoryContext() {
  return useContext(StoryContext)
}
