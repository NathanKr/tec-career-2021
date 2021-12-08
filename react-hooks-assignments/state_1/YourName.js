import React , {useState} from 'react';

const YourName = () => {
    const [flag , setFlag]= useState(true);
    const style = {color : flag ? 'red' : 'green'}

    return (
        <h2 onClick={() => setFlag(!flag)} style={style}>
            Nathan Krasney
        </h2>
    );
};

export default YourName;