import React, { useState } from "react";
import { Button } from "semantic-ui-react";

const ToggleTextColor = () => {
  const [counter1, setCounter1] = useState(2);
  const [counter2, setCounter2] = useState(3);
  const [counter3, setCounter3] = useState(4);
  
  const getColor = num => num %2 ? 'blue' : 'red';

  return (
    <div>
      <Button primary onClick={() => setCounter1(counter1 + 1)}>
        Increment
      </Button>
      <p style={{color : getColor(counter1)}}>counter 1 : {counter1}</p>
      <Button primary onClick={() => setCounter2(counter2 + 1)}>
        Increment
      </Button>
      <p style={{color : getColor(counter2)}}>counter 2 : {counter2}</p>
      <Button primary onClick={() => setCounter3(counter3 + 1)}>
        Increment
      </Button>
      <p style={{color : getColor(counter3)}}>counter 3 : {counter3}</p>
    </div>
  );
};

export default ToggleTextColor;
