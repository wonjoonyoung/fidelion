import { useEffect } from "react";
import { useScrollHandler } from "../hook/useScrollHandler";
import { useLocation } from "react-router-dom";
import { useStoryContext } from "../context/StoryContext";

export function useScrollUpAdapter(ref) {
  const { pathname } = useLocation();

  const { scrollUp } = useStoryContext();
  const handler = useScrollHandler(ref);

  useEffect(() => {
    handler.reset();
  }, [pathname]);

  useEffect(() => {
    if (handler.y > 600) {
      scrollUp.setEnabled(true);
    } else {
      scrollUp.setEnabled(false);
    }
  }, [handler.y]);

  useEffect(() => {
    scrollUp.observe(handler.reset);
  }, []);
}
