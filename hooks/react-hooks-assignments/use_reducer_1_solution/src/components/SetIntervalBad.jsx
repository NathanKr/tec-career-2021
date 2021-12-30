import {useEffect, useState} from 'react';

const SetIntervalBad = () => {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        setInterval(()=>{
            // --- closure on count initial value - 0
            setCount(count+1)
        },1000)
    },[])
    return (
        <p>count : {count}</p>
    );
};

export default SetIntervalBad;