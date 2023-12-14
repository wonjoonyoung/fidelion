import styled from "styled-components";
import { useStoryContext } from "../../context/StoryContext";
import { Images } from "../asset/images";
import { useBgmContext } from "../../context/BcmContext";


export function Floating() {
  const { scrollUp } = useStoryContext()
  const bgm = useBgmContext()

  const musicIcon = bgm.paused ? Images.ICON_PAUSED : Images.ICON_PLAYING

  function toggle() {
    bgm.toggle()
  }

  return (
    <Container>
      <Content>
        <Button
          onClick={toggle}
          src={musicIcon}
        />
        {scrollUp.showButton && (
          <Button
            onClick={scrollUp.goUp}
            src={Images.ICON_SCROLL_UP}
          />
        )}
      </Content>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  box-sizing: border-box;
  padding-bottom: 120px;
  padding-right: 8px;
  pointer-events: none;
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  row-gap: 8px;
`

const Button = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  fill: rgba(255, 255, 255, 0.25);
  pointer-events: all;
  cursor: pointer;
`
