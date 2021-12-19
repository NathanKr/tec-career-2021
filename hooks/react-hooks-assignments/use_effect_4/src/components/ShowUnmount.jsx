import React, { useEffect } from "react";

const ShowUnmount = () => {
  useEffect(() => {
    console.log("useEffect is called");
    return () => console.log("called on unmount");
  });

  return <div>ShowUnmount component</div>;
};

export default ShowUnmount;
