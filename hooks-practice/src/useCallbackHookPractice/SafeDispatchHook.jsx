import React, { useCallback } from "react";
import { useEffect } from "react";

function SafeDispatchHook(dispatch) {
  const mountedRef = React.useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return useCallback(
    (...args) => {
      if (mountedRef.current) {
        dispatch(...args);
      }
    },
    [dispatch]
  );
}

export default SafeDispatchHook;
