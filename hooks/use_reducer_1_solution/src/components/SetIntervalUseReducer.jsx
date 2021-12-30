import {useEffect, useReducer} from 'react';
import counterReducer from '../reducers/counterReducer';

const SetIntervalUseReducer = () => {
    // --- this is the global state thus closure is no issue here !!!!
    const [state,dispatch] = useReducer(counterReducer,{count:0})
    useEffect(()=>{
        setInterval(()=>{
            dispatch({type: "increment"})
        },1000)
    },[])
    return (
        <p>count : {state.count}</p>
    );
};

export default SetIntervalUseReducer;