import LOGO from "./asset/fidelon_logo.png"
import BACKGROUND from './asset/back ground.png'
import FLOAT_2 from './asset/float_2.png'
import FLOAT_0 from './asset/float_0.png'
import FLOAT_8 from './asset/float_8.png'
import BOTTOM_ARROW_ICON from './asset/bottom_arrow_icon.svg'
import LANDING_LOGO from './asset/landing_logo.png'
import Y2023_MAIN from './asset/2023_main.png'
import Y2024_SMALL from './asset/2024_small.png'
import Y2024_MAIN from './asset/2024_main.png'
import Y2025_FIRST from './asset/2025_first.png'
import Y2025_SECOND from './asset/2025_second.png'
import Y2030_MAIN from './asset/2030_main.png'
import Y2030_SECOND from './asset/2030_second.png'
import Y2031_MAIN from './asset/2031_main.png'
import Y2032_FIRST from './asset/2032_first.png'
import Y2032_SECOND from './asset/2032_second.png'
import Y2032_THIRD from './asset/2032_third.png'
import Y2033_MAIN from './asset/2033_main.png'
import Y2042_MAIN from './asset/2042_main.png'
import Y2054_FIRST from './asset/2054_first.png'
import Y2054_SECOND from './asset/2054_second.png'
import Y2055_MAIN from './asset/2055_main.png'
import Y2059_MAIN from './asset/2059_main.png'
import Y2062_MAIN from './asset/2062_main.png'
import Y2068_MAIN from './asset/2068_main.png'
import LIBERTY_STATE from './asset/liberty_state.png'
import { loadImage } from "../untill/load-image";

export const Images = {
  LOGO,
  BACKGROUND,
  FLOAT_2,
  FLOAT_0,
  FLOAT_8,
  BOTTOM_ARROW_ICON,
  LANDING_LOGO,
  Y2023_MAIN,
  Y2024_SMALL,
  Y2024_MAIN,
  Y2025_FIRST,
  Y2025_SECOND,
  Y2030_MAIN,
  Y2030_SECOND,
  Y2031_MAIN,
  Y2032_FIRST,
  Y2032_SECOND,
  Y2032_THIRD,
  Y2033_MAIN,
  Y2042_MAIN,
  Y2054_FIRST,
  Y2054_SECOND,
  Y2055_MAIN,
  Y2059_MAIN,
  Y2062_MAIN,
  Y2068_MAIN,
  LIBERTY_STATE,
  load: loadImages,
}

async function loadImages() {
  await Promise.all([
    loadImage(LOGO),
    loadImage(BACKGROUND),
    loadImage(FLOAT_2),
    loadImage(FLOAT_0),
    loadImage(FLOAT_8),
  ])

  await Promise.all(
    Object.values(Images).map(async it => {
      if (typeof it === "string") {
        await loadImage(it)
      }
    }),
  )
}
