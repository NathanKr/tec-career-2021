import { useEffect, useReducer } from "react";
import counterReducer from "../reducers/counterReducer";

const SetIntervalUseReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  useEffect(() => {
    setInterval(() => {
      // --- no closure
      dispatch({ type: "increment" });
    }, 1000);
  }, []);
  return <p>count : {state.count}</p>;
};

export default SetIntervalUseReducer;
