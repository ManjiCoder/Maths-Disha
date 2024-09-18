import React, { useState } from "react";
import {
  calculatePrimeFactorsDivision,
  generatePrimeNum,
} from "../services/primeDivision";
import PrimeFactorDivision from "./PrimeFactorDivision";

function HcfLcm() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const [hcf, setHcf] = useState([]);
  const [lcm, setLcm] = useState([]);

  // check Number sign & validate
  const validateNum = (value) => {
    value = value.slice(0, 5); // No. of digit accepted is 5
    if (value) {
      if (Math.sign(value) === 1) {
        // console.log(value);
        return value;
      }
    }
    return "";
  };
  const handleOnChangeNum1 = (e) => {
    const value = e.target.value;
    let number1 = validateNum(value);
    setNum1(number1);
  };
  const handleOnChangeNum2 = (e) => {
    const value = e.target.value;
    let number2 = validateNum(value);
    setNum2(number2);
  };

  // HCF
  const calculateHCF = (n1, n2, arr) => {
    n1 = Number.parseInt(n1);
    n2 = Number.parseInt(n2);
    // console.log(n1, n2);
    arr = [];
    for (let i = 1; i <= n1 && i <= n2; i++) {
      // console.log(i);
      if (n1 % i === 0 && n2 % i === 0) {
        // console.log(i);
        arr.push(i);
        // console.log(arr);
      }
    }
    const HCF = Math.max(...arr);
    // setResult(JSON.stringify(arr))
    setResult(
      <div>
        <div className="text-center text-xl">
          <span className="font-bold">HCF</span> of {num1}, {num2} ={" "}
          <span className="font-bold">{HCF}</span>
        </div>
        <div>
          <div className="container flex justify-around">
            <section>
              <div>
                <span className="font-semibold">{HCF}</span> X {num1 / HCF} =
                {"  "}
                {(HCF * num1) / HCF}
              </div>
              <div>
                <span className="font-semibold">{HCF}</span> X {num2 / HCF} =
                {"  "}
                {(HCF * num2) / HCF}
              </div>
            </section>
            <section>
              <div>or</div>
              <div>or</div>
            </section>
            <section>
              <div>
                {num1 / HCF} X <span className="font-semibold">{HCF}</span> ={" "}
                {(num1 / HCF) * HCF}
              </div>
              <div>
                {num2 / HCF} X <span className="font-semibold">{HCF}</span> ={" "}
                {(num2 / HCF) * HCF}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
    // console.log(arr);
    // console.count(arr)
    // return arr
    const primes = generatePrimeNum(num1);
    const data = calculatePrimeFactorsDivision(num1, primes);
    const primes1 = generatePrimeNum(num2);
    const data1 = calculatePrimeFactorsDivision(num2, primes1);
    // console.log(data);
    setHcf(data);
    setLcm(data1);
  };

  // LCM
  const calculateLCM = (n1, n2, arr) => {
    n1 = Number.parseInt(n1);
    n2 = Number.parseInt(n2);
    // console.log(n1, n2);
    arr = [];
    let min = n1 > n2 ? n1 : n2;
    while (true) {
      if (min % n1 === 0 && min % n2 === 0) {
        // console.log(min);
        arr.push(min);
        break;
      }
      min++;
      // console.log(arr);
    }
    const LCM = Math.max(...arr);
    // console.log(arr);
    setResult(
      <div>
        <div className="text-center text-xl">
          <span className="font-bold">LCM</span> of {num1}, {num2} ={" "}
          <span className="font-bold">{LCM}</span>
        </div>
        <div className="container flex justify-around">
          <section>
            <div>
              {num1} X {LCM / num1} ={" "}
              <span className="font-semibold">{LCM}</span>
            </div>
            <div>
              {num2} X {LCM / num2} ={" "}
              <span className="font-semibold">{LCM}</span>
            </div>
          </section>
          <section>
            <div>or</div>
            <div>or</div>
          </section>
          <section>
            <div>
              {LCM / num1} X {num1} ={" "}
              <span className="font-semibold">{LCM}</span>
            </div>
            <div>
              {LCM / num2} X {num2} ={" "}
              <span className="font-semibold">{LCM}</span>
            </div>
          </section>
        </div>
      </div>
    );

    const primes = generatePrimeNum(num1);
    const data = calculatePrimeFactorsDivision(num1, primes);
    const primes1 = generatePrimeNum(num2);
    const data1 = calculatePrimeFactorsDivision(num2, primes1);
    // console.log(data);
    setHcf(data);
    setLcm(data1);
  };

  return (
    <div className="bg-slate-300 min-h-screen max-h-fit">
      <form className="py-8 space-y-4">
        <div className="flex flex-col m-auto justify-center w-3/4">
          <label className="cursor-pointer pl-2" htmlFor="num-1">
            <span>
              Enter 1<sup>st </sup>Number :
            </span>
          </label>
          <input
            className="pl-2 py-1.5 bg-slate-50 rounded-md border-2 border-white focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="number"
            name=""
            id="num-1"
            placeholder="Enter a number"
            onChange={handleOnChangeNum1}
            value={num1}
          />
        </div>

        <div className="flex flex-col m-auto justify-center w-3/4 ">
          <label className="cursor-pointer pl-2" htmlFor="num-2">
            <span>
              Enter 2<sup>st </sup>Number :
            </span>
          </label>
          <input
            className="pl-2 py-1.5 bg-slate-50 rounded-md border-2 border-white focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="number"
            name=""
            id="num-2"
            placeholder="Enter an another number"
            onChange={handleOnChangeNum2}
            value={num2}
          />
        </div>
        <div className="flex flex-col pt-4 space-y-4 m-auto justify-center w-3/4">
          <button
            className={`${
              num1.length === 0 || num2.length === 0
                ? "cursor-not-allowed brightness-75"
                : "cursor-pointer brightness-100"
            } text-white  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2.5 text-center`}
            type="submit"
            disabled={num1.length === 0 || num2.length === 0}
            onClick={(e) => {
              e.preventDefault();
              calculateHCF(num1, num2);
            }}
          >
            HCF
          </button>
          <button
            className={`${
              num1.length === 0 || num2.length === 0
                ? "cursor-not-allowed brightness-75"
                : "cursor-pointer brightness-100"
            } text-white  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2.5 text-center`}
            type="submit"
            disabled={num1.length === 0 || num2.length === 0}
            onClick={(e) => {
              e.preventDefault();
              calculateLCM(num1, num2);
            }}
          >
            LCM
          </button>
          {result !== "" ? (
            <div className="bg-slate-100 py-2 pl-2 rounded-md">{result}</div>
          ) : (
            ""
          )}
        </div>
      </form>

      {hcf.steps && (
        <div className="flex justify-center gap-5 pb-20">
          <PrimeFactorDivision
            steps={hcf.steps}
            divisors={hcf.divisors}
            time={hcf.time}
          />
          <PrimeFactorDivision
            steps={lcm.steps}
            divisors={lcm.divisors}
            time={lcm.time}
          />
        </div>
      )}
    </div>
  );
}

export default HcfLcm;
