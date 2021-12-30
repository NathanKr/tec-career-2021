import { useEffect, useReducer } from "react";
import counterReducer from "../reducers/counterReducer";

const SetIntervalUseReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  useEffect(() => {
    setInterval(() => {
      // --- accordning to Dan Abramov (https://overreacted.io/making-setinterval-declarative-with-react-hooks/): 
      // --- The dispatch function itself never changes so you can pump data into it from any closure
      dispatch({ type: "increment" });
    }, 1000);
  }, []);
  return <p>count : {state.count}</p>;
};

export default SetIntervalUseReducer;
