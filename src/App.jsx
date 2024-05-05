import React, { useState } from "react";
import Timer from "./CustomTimer";

const App = () => {
  const [timer, setTimer] = useState(0);

  const handleSubmit = () => {
    console.log(timer);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl mb-4">Timer App</h1>
        <div className="flex flex-col items-center border-2 p-4 gap-4">
          <h1 className="text-lg mb-2">Enter Time</h1>
          <input
            className="border-2 w-56 px-2 py-1"
            type="number"
            value={timer}
            onChange={(e) => setTimer(e.target.value)}
            required
          />
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-56"
            onClick={handleSubmit}
          >
            Start
          </button>
        </div>

        <br /><br />
        <div className="customTimer">
          <Timer time={parseInt(timer)} />
        </div>
      </div>
    </>
  );
};

export default App;
