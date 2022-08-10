import React, { useState } from "react";
import Error from "./Error";

function Main() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  // To showError
  const showError = () => {
    console.log("error");
  };

  // Function to Calculate HCF
  const calculateHCF = (e) => {
    e.preventDefault();
    // To check or validate userInput
    if (num1 === 0 || num2 === 0) {
      showError();
    } else {
      const arrContainer = [num1, num2];
      const sortArrContainer = arrContainer.sort((a, b) => {
        return a - b;
      });
      const max = sortArrContainer[sortArrContainer.length - 1];
      const min = arrContainer[0];
      // const max = Math.max(...arrContainer);
      // const min = Math.min(...arrContainer);
      const n = Math.round(max / min);
      console.log("n is", n, min, max);
      console.log("sort is", sortArrContainer);

      // Function Generating Factors
      const generateFactors = (num, arr) => {
        if (num > 0) {
          arr = [1];
          for (let i = 1; i <= n; i++) {
            // console.log(i*num)
            arr.push(i * num);
          }
          console.log(arr);
          return arr;
        } else {
          showError();
        }
      };
      const arr1 = generateFactors(num1);
      const arr2 = generateFactors(num2);

      const getCommons = (arr1, arr2, commonArr) => {
        commonArr = arr1.filter((same) => arr2.indexOf(same) !== -1);
        return commonArr;
      };
      const arrCompare = getCommons(arr1, arr2);
      const HCF = Math.max(...arrCompare);
      // let a1 = JSON.stringify(arr1)
      // let a2 = JSON.stringify(arr2)
      console.log("arrCompare", arrCompare);
      setResult(
        <>
          {/* <div>
          Factors of {num1} is {(a1)}
        </div>
        <div>
          Factors of {num2} is {(a2)}
        </div> */}
          <span>
            <strong>HCF</strong> of {num1} & {num2} is <strong>{HCF}.</strong>
          </span>
        </>
      );
      console.log("HCF is", HCF, arrCompare);
    }
  };

  return (
    <div>
      <form className="py-8">
        <div className="flex flex-col my-4 mx-8 justify-center w-3/4">
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
            onChange={(e) => setNum1(e.target.value)}
            onBlur={() => setNum1(Math.abs(num1))}
            value={num1}
          />
        </div>

        <div className="flex flex-col my-4 mx-8 justify-center w-3/4 ">
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
            onChange={(e) => setNum2(e.target.value)}
            onBlur={() => setNum2(Math.abs(num2))}
            value={num2}
          />
        </div>
        <div className="flex flex-col my-8 mx-8 justify-center w-3/4">
          <button
            className="cursor-pointer text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2.5 text-center mb-2"
            type="submit"
            disabled={num1.length === 0 || num2.length === 0}
            onClick={calculateHCF}
          >
            HCF
          </button>
          {result !== "" ? (
            <div className="my-8 bg-slate-100 py-2 pl-2 rounded-md">
              {result}
            </div>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
}

export default Main;
