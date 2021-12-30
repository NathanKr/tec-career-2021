import {useEffect, useState} from 'react';

const SetIntervalBad = () => {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        setInterval(()=>{
            setCount(count+1)
        },1000)
    },[])
    return (
        <p>count : {count}</p>
    );
};

export default SetIntervalBad;