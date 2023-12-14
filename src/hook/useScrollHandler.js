import { useEffect, useState } from "react";

export function useScrollHandler(ref) {
  const [y, setY] = useState(0);

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.addEventListener("touchend", () => {
        setY(ref.current.scrollTop ?? 0);
      });
      ref.current.addEventListener("scroll", () => {
        setY(ref.current.scrollTop ?? 0);
      });
    }
  }, [ref.current]);

  return {
    ref,
    y,
    reset: () => ref.current?.scrollTo(0, 0),
  };
}