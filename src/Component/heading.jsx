import React from 'react';

const Heading = (props) => {
  return (
    <div>
      <h1 className='fw-bolder'>Hello, {props.name}!</h1>
      
    </div>
  );
};

export default Heading;
