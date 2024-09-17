import React, { useState } from "react";
import { generatePrimeNum } from "../services/primeDivision";

export default function PrimeDivision() {
  const [num, setNum] = useState("");

  const handleOnChangeNum = (e) => {
    setNum(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const primes = generatePrimeNum(num);
    console.log(primes);
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

          {/* {(test2 || test3 || test4 || test5 || test9 || test10) && (
          <div className="bg-slate-100 py-2 pl-2 rounded-md">
            <div className="">{test2}</div>
            <div className="">{test3}</div>
            <div className="">{test4}</div>
            <div className="">{test5}</div>
            <div className="">{test9}</div>
            <div className="">{test10}</div>
          </div>
        )} */}
        </div>
      </form>
    </div>
  );
}
