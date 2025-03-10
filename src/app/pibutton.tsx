"use client";
import { useState } from "react";

const worker = new Worker(new URL("calculation.js", import.meta.url));

export default function PiButton() {
  const [piNumber, setPiNumber] = useState<number>(0);
  const [accuracy, setAccuracy] = useState<number>(1);
  const [number, setNumber] = useState<number>(1);

  function calculatePi(accuracy: number) {
    if (worker) {
      worker.postMessage({ command: "start", accuracy: accuracy });
      worker.onmessage = (event) => setPiNumber(event.data);
    }
  }

  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-4 w-1/2">
      <button
        onClick={() => calculatePi(accuracy)}
        className="bg-amber-950 text-white rounded-2xl w-full items-center justify-center p-8 col-span-2 hover:bg-black hover:text-amber-300 cursor-pointer"
      >
        {" "}
        Generate Pi{" "}
      </button>
      <h1 className="bg-white rounded-md flex items-center justify-center">
        {" "}
        Pi:
        {piNumber}{" "}
      </h1>
      <div className="w-full relative">
        <h1 className="absolute top-0 left-0 text-sm text-gray-600 px-2 ">
          Accuracy:
        </h1>
        <input
          value={accuracy}
          placeholder="Accuracy"
          onChange={(e) => setAccuracy(Number(e.target.value))}
          type="number"
          className="bg-white rounded-md text-center w-full h-full"
        />
      </div>
      <h1 className="bg-black text-white rounded-md flex items-center justify-center">
        {" "}
        Num:
        {number}{" "}
      </h1>

      <button
        onClick={() => setNumber(number + 1)}
        className="bg-amber-400 text-black rounded-md w-full items-center justify-center p-8 hover:bg-black hover:text-amber-300 cursor-pointer"
      >
        {" "}
        Increment number +1{" "}
      </button>
    </div>
  );
}
