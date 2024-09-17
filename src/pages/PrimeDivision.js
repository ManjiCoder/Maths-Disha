import React, { useState } from "react";
import {
  calculatePrimeFactorsDivision,
  generatePrimeNum,
} from "../services/primeDivision";

export default function PrimeDivision() {
  const [num, setNum] = useState("");
  const [steps, setSteps] = useState([]);

  const handleOnChangeNum = (e) => {
    setNum(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const primes = generatePrimeNum(num);
    const steps = calculatePrimeFactorsDivision(parseInt(num), primes);
    console.table(steps);
    setSteps(steps);
  };
  return (
    <div className="bg-slate-300 min-h-screen max-h-fit">
      <form className="py-8 space-y-4">
        <div className="flex flex-col m-auto justify-center w-3/4">
          <label className="cursor-pointer pl-0.5 mb-2" htmlFor="num-1">
            <span>Enter Number for Prime Division:</span>
          </label>
          <input
            className="pl-2 py-1.5 bg-slate-50 rounded-md border-2 border-white focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="number"
            name=""
            id="num-1"
            placeholder="Enter a number"
            onChange={handleOnChangeNum}
            value={num}
          />
        </div>

        <div className="flex flex-col pt-4 space-y-4 m-auto justify-center w-3/4">
          <button
            className={`${
              num.length === 0
                ? "cursor-not-allowed brightness-75"
                : "cursor-pointer brightness-100"
            } text-white  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2.5 text-center`}
            type="submit"
            disabled={num.length === 0}
            onClick={handleSubmit}
          >
            Prime Division {num}
          </button>
          <section>
            {steps.map(({ divisor, divident, reminder }) => (
              <div
                key={divisor + reminder}
                className="grid grid-cols-2 min-w-[8rem] w-32 mx-auto text-lg font-semibold"
              >
                <span className="px-2 border border-black">{divisor}</span>
                <span className="px-2 border border-black">{divident}</span>
              </div>
            ))}
            <div>
              {steps.length !== 0 &&
                JSON.stringify(steps.map((divisor) => divisor))}
            </div>
          </section>
        </div>
      </form>
    </div>
  );
}
