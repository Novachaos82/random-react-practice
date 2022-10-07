import React from "react";
import { useReducer } from "react";
import AsyncReducer from "./AsyncReducer";
import SafeDispatchHook from "./SafeDispatchHook";

function UseAsyncHook(initialState) {
  const [state, unsafeDispatch] = useReducer(AsyncReducer, {
    status: initialState,
    // 🐨 this will need to be "data" instead of "pokemon"
    data: null,
    error: null,
    ...initialState,
  });

  const dispatch = SafeDispatchHook(unsafeDispatch);

  const run = React.useCallback(
    (promise) => {
      dispatch({ type: "pending" });
      promise.then(
        (promise) => {
          dispatch({ type: "resolved", promise });
        },
        (error) => {
          dispatch({ type: "rejected", error });
        }
      );
    },
    [dispatch]
  );
  return { ...state, run };
}

export default UseAsyncHook;
