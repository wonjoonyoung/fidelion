import styled from "styled-components";
import { ReactNode, TouchEventHandler, useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import { useDelta } from "../hook/useDelta";

export function ScrollableGestureHandler(args: {
  children: ReactNode
  onScrollUp: () => void
  onScrollDown: () => void
}) {
  const container = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll({ container })

  function handleDown() {
    const element = container.current
    if (element == null) return

    const scrollableHeight = element.scrollHeight - element.offsetHeight
    const scrolledHeight = scrollY.get()

    if (scrolledHeight > scrollableHeight - 10) {
      args.onScrollDown()
    }
  }

  function handleUp() {
    const element = container.current
    if (element == null) return

    const scrolledHeight = scrollY.get()
    if (scrolledHeight < 10) {
      args.onScrollUp()
    }
  }

  return (
    <ScrollableContainer
      className={"scrollable-gesture-handler"}
      ref={container}
    >
      <GestureHandler
        onPrev={handleDown}
        onNext={handleUp}
        scrollable={true}
      >
        {args.children}
      </GestureHandler>
    </ScrollableContainer>
  )
}

const ScrollableContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: unset;
`

export function GestureHandler(args: {
  children: ReactNode
  type?: "VERTICAL" | "HORIZONTAL"
  scrollable?: boolean
  onNext: () => void
  onPrev: () => void
}) {
  const container = useRef<HTMLDivElement>(null)
  const [y, setY] = useState<number | null>(null)
  const deltaY = useDelta(y)

  const [x, setX] = useState<number | null>(null)
  const deltaX = useDelta(x)


  const type = args.type ?? "VERTICAL"
  useEffect(() => {
    if (type !== "VERTICAL") return
    if (deltaY && deltaY > 15) args.onPrev && args.onPrev()
    if (deltaY && deltaY < -15) args.onNext && args.onNext()
  }, [args, deltaY, type])

  useEffect(() => {
    if (type !== "HORIZONTAL") return
    if (deltaX && deltaX > 15) args.onNext && args.onNext()
    if (deltaX && deltaX < -15) args.onPrev && args.onPrev()
  }, [args, deltaX, type])

  const handleTouchMove: TouchEventHandler = (e) => {
    const { touches } = e
    if (e.touches.length === 0) return

    const touch = touches[0]
    const { clientY, clientX } = touch
    setY(clientY)
    setX(clientX)
  }

  const handleTouchEnd: TouchEventHandler = (e) => {
    setX(null)
    setY(null)
  }

  return (
    <Container
      className={"gesture-handler"}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      scrollable={args.scrollable === true}
      ref={container}
    >
      {args.children}
    </Container>
  )
}


const Container = styled.div<{ scrollable: boolean }>`
  width: 100%;
  height: ${props => !props.scrollable ? "100%" : 'unset'}
`
