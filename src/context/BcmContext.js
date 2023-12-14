import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const audio = new Audio("../story/asset/story_bgm.mp3")

function useBgm() {
  const { pathname } = useLocation()
  const [isPlaying, setPlaying] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)
  const paused = !isPlaying

  useEffect(() => {
    if (isPlaying) setHasPlayed(true)
  }, [isPlaying]);

  useEffect(() => {
    console.log(`pathname: ${pathname} hasPlayed: ${hasPlayed}`)
    if (hasPlayed) {

    }
  }, [pathname]);

  async function play() {
    setPlaying(true)
    await audio.play()
  }

  async function pause() {
    setPlaying(false)
    audio.pause()
  }

  async function toggle() {
    if (isPlaying) {
      await pause()
    } else {
      await play()
    }
  }

  return {
    play, pause, paused, toggle,
  }
}

const BgmContext = createContext(null)

export const useBgmContext = () => useContext(BgmContext)

export function BgmContextProvider(props) {
  const state = useBgm()
  return (
    <BgmContext.Provider value={state}>
      {props.children}
    </BgmContext.Provider>
  )
}