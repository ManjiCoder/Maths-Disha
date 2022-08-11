import React, { useState } from "react";

function Main() {
  const [num1, setNum1] = useState("33");
  const [num2, setNum2] = useState("3");
  const [result, setResult] = useState("");
  // To showError
  const showError = () => {
    console.log("Error");
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
            // console.log(num * i);
            arr.push(num * i);
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
      console.log(arrCompare);
      const HCF = max % min === 0 ? min : 1;
      // let a1 = JSON.stringify(arr1);
      // let a2 = JSON.stringify(arr2);
      console.log("arrCompare", arrCompare);
      setResult(
        <>
          {/* <div>
            Factors of {num1} is {a1}
          </div>
          <br/>
          <div>
            Factors of {num2} is {a2}
          </div>
          <br/> */}
          <span>
            <strong>HCF</strong> of {num1} & {num2} is <strong>{HCF}.</strong>
          </span>
        </>
      );
      console.log("HCF is", HCF, arrCompare);
    }
  };

  // Function to Calculate HCF
  const calculateLCM = (e) => {
    e.preventDefault();
    const arrContainer = [num1, num2];
    const sortedArr = arrContainer.sort((a, b) => {
      return a - b;
    });
    const max = Math.max(...sortedArr);
    const min = Math.min(...sortedArr);
    // console.log(min, max);

    const getLCM = (num, arr) => {
      arr = [];
      for (let i = num; i <= max; i++) {
        // console.log(i);
        arr.push(i);
      }
      return arr;
    };

    const arr1 = max % min === 0 ? getLCM(num1) : [num1, num2];
    const arr2 = max % min === 0 ? getLCM(num2) : [num1, num2];
    const LCM = max % min === 0 ? max : num1 * num2;
    console.log(`Mutiples of ${num1}`, arr1);
    console.log(`Mutiples of ${num2}`, arr2);
    console.log(LCM);
    setResult(
      <span>
        <strong>LCM </strong>of {num1} & {num2} is <strong>{LCM}.</strong>
      </span>
    );
  };

  return (
    <div>
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
            onChange={(e) => {
              Math.sign(e.target.value) === -1
                ? setNum1(Math.abs(e.target.value))
                : setNum1(e.target.value);
            }}
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
            onChange={(e) => {
              Math.sign(e.target.value) === -1
                ? setNum2(Math.abs(e.target.value))
                : setNum2(e.target.value);
            }}
            value={num2}
          />
        </div>
        <div className="flex flex-col pt-4 space-y-4 m-auto justify-center w-3/4">
          <button
            className="cursor-pointer text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2.5 text-center"
            type="submit"
            disabled={num1.length === 0 || num2.length === 0}
            onClick={calculateHCF}
          >
            HCF
          </button>
          <button
            className="cursor-pointer text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2.5 text-center"
            type="submit"
            disabled={num1.length === 0 || num2.length === 0}
            onClick={calculateLCM}
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
    </div>
  );
}

export default Main;
