import React from "react";
import { twMerge } from "tailwind-merge";

function PrimeFactorDivision({ steps, divisors, time }) {
  return (
    <section className="flex flex-col pt-5">
      {steps &&
        steps.map(({ divisor, divident, reminder }, i) => {
          const isFirstIdx = i === 0 && "border-t-0";
          const isLastIdx = i === steps.length - 1 && "border-b-0";
          return (
            <div
              key={divisor + reminder}
              className="grid grid-cols-2 min-w-[8rem] text-center w-32 mx-auto text-lg font-semibold"
            >
              <span
                className={twMerge(
                  "px-2 border border-l-0 text-blue-700 border-black font-bold italic",
                  isFirstIdx,
                  isLastIdx
                )}
              >
                {divisor}
              </span>
              <span
                className={twMerge(
                  "px-2 border border-r-0 border-black",
                  isFirstIdx,
                  isLastIdx
                )}
              >
                {divident}
              </span>
            </div>
          );
        })}
      <div>
        {divisors && (
          <div className="font-semibold pt-5 text-lg text-center">
            <span className="text-blue-700">
              {divisors.toString().replaceAll(",", " x ")}
            </span>
            <span> = {divisors.reduce((x, y) => x * y)}</span>
          </div>
        )}
      </div>
      <div className="font-light pt-5 text-xs text-right">
        {time && (
          <div>
            <span>{parseFloat(time).toFixed(4)}</span> sec
          </div>
        )}
      </div>
    </section>
  );
}

export default PrimeFactorDivision;
