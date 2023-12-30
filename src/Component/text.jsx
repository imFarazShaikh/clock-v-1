import React from "react";

const Text = (props) => {
  let time = new Date();
  return (
    <div>
      <h4>This is the clock that show the Time.</h4>
      <h3>This is a current Time : {time.toLocaleDateString()} - {""}{time.toLocaleTimeString()}</h3>
      
    </div>
  );
};

export default Text;
