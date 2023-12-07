import React, { useState } from "react";

function Background() {
  const [color, setColor] = useState("silver");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 rounded-md text-white"
            style={{ backgroundColor: "red" }}
            onClick={()=>setColor('red')}
          >
            Red
          </button>
          <button
            className="outline-none px-4 rounded-md text-white"
            style={{ backgroundColor: "red" }}
            onClick={()=>setColor('green')}
          >
            Green
          </button>
          <button
            className="outline-none px-4 rounded-md text-white"
            style={{ backgroundColor: "red" }}
            onClick={()=>setColor('blue')}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Background;
