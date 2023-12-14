import { useEffect, useState } from "react";

function useFlag() {
  const [flag, setFlag] = useState(null);
  const [observers, setObservers] = useState([]);

  useEffect(() => {
    return () => {
      setFlag(null);
      setObservers([]);
    };
  }, []);

  useEffect(() => {
    if (flag !== null) {
      observers.forEach((it) => it());
    }
  }, [flag]);

  function refresh() {
    setFlag(Math.random());
  }

  function clear() {
    setFlag(null);
  }

  function observe(handler) {
    setObservers((prev) => [...prev, handler]);
  }

  return {
    refresh,
    clear,
    observe,
  };
}

export default useFlag