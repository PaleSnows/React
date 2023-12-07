import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setData(data);
      });
  }, []);
  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">
      Github followers:{data.followers}
    </div>
  );
}

export default Github;
