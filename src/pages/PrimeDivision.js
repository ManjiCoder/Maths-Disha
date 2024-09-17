import React, { useState } from "react";
import {
  calculatePrimeFactorsDivision,
  generatePrimeNum,
} from "../services/primeDivision";

export default function PrimeDivision() {
  const [num, setNum] = useState("");
  const [steps, setSteps] = useState([]);

  const handleOnChangeNum = (e) => {
    if (e.target.value.length < 6) {
      setNum(e.target.value);
    }
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
          <section className="flex flex-col pt-5">
            {steps.length !== 0 &&
              steps.map(({ divisor, divident, reminder }, i) => (
                <div
                  key={divisor + reminder}
                  className="grid grid-cols-2 min-w-[8rem] text-center w-32 mx-auto text-lg font-semibold"
                >
                  <span
                    className={`${i === 0 && "border-t-0"} ${
                      i === steps.length - 1 && "border-b-0"
                    }  px-2 border border-l-0 text-blue-700 border-black font-bold italic`}
                  >
                    {divisor}
                  </span>
                  <span
                    className={`${i === 0 && "border-t-0"} ${
                      i === steps.length - 1 && "border-b-0"
                    }  px-2 border border-r-0 border-black`}
                  >
                    {divident}
                  </span>
                </div>
              ))}
            <div>
              {steps.length !== 0 && (
                <div className="font-semibold pt-5 text-lg text-center">
                  <span className="text-blue-700">
                    {steps.divisors.toString().replaceAll(",", " x ")}
                  </span>
                  <span> = {steps.divisors.reduce((x, y) => x * y)}</span>
                </div>
              )}
            </div>
            <div>
              {steps.length !== 0 && (
                <div className="font-light pt-5 text-xs text-right">
                  <span>{parseFloat(steps.time).toFixed(4)}</span> sec
                </div>
              )}
            </div>
          </section>
        </div>
      </form>
    </div>
  );
}
