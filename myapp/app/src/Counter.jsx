
import React from 'react'
import { useState } from 'react';

function Counter() {
    const [value, setValue] = useState(5);

const addValue = () => {
  setValue((prev) => prev + 1);
  setValue((prev) => prev + 1);
  // setValue(value+1)
};
const subValue = () => {
  setValue(value - 1);
  if (value < 0) {
    console.log("invalid");
  }
};


return (
    <>
      <div>
        
        <h1>Counter value: {value}</h1>

        <button  onClick={addValue} className='bg-green-500 mb-2'>Add value: </button>
        <br />
        <button   onClick={subValue} className='bg-green-500 mb-2'>Sub value</button>
      </div>
    </>
  );
}

export default Counter