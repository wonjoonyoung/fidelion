import styled from "styled-components";
import { ReactNode } from "react";

export function ScrollSection(args: {
  children: ReactNode
}) {
  return (
    <Container>
      {args.children}
    </Container>
  )
}

const Container = styled.div`
  scroll-snap-align: start;
  perspective: 1vh;
`

