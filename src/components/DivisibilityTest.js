import React, { useState } from "react";

function DivisibilityTest() {
  const [num, setNum] = useState("");
  const [test2, setTest2] = useState("");
  const [test3, setTest3] = useState("");
  const [test4, setTest4] = useState("");
  const [test5, setTest5] = useState("");
  const [test9, setTest9] = useState("");
  const [test10, setTest10] = useState("");

  // check Number sign & validate
  const validateNum = (value) => {
    value = value.slice(0, 5); // No. of digit accepted is 5
    if (Math.sign(value) === 1) {
      // console.log(value);
      return value;
    }
    return "";
  };
  const handleOnChangeNum = (e) => {
    const value = e.target.value;
    let number = validateNum(value);
    setNum(number);
  };

  const checkDivisibility = () => {
    // For 2
    const divisibilityTestFor2 = (num) => {
      if (num.slice(-1) % 2 === 0) {
        setTest2(
          <div>
            {num.slice(0, num.length - 1)}
            <span className="underline">{num.slice(-1)}</span> is divisible by
            2. i.e.{" "}
            <span className="font-bold">
              2 X {num / 2}= {num}
            </span>
          </div>
        );
      } else {
        console.log("fail");
        setTest2(<div>{num} is not divisible by 2.</div>);
      }
    };
    // For 3
    const divisibilityTestFor3 = (num, sumArr) => {
      let arr = Array.from(num);
      console.log(arr);
      sumArr = arr.reduce((a, b) => {
        return a + b;
      });
      // console.log(sumArr);
      if (sumArr % 3 === 0) {
        setTest3(
          <div>
            {num} is divisible by 3. i.e.{" "}
            <span className="underline">[ {sumArr} ]</span>{" "}
            <span className="font-bold">
              3 X {num / 3}= {num}
            </span>
          </div>
        );
      } else {
        console.log("fail");
        setTest3(<div>{num} is not divisible by 3.</div>);
      }
      return sumArr;
    };
    // For 4
    const divisibilityTestFor4 = (num) => {
      if (num.slice(-2) % 4 === 0 && num % 4 === 0) {
        setTest4(
          <div>
            {num.slice(0, num.length - 2)}
            <span className="underline">{num.slice(-2)}</span> is divisible by
            4. i.e.{" "}
            <span className="font-bold">
              4 X {num / 4}= {num}
            </span>
          </div>
        );
      } else {
        console.log("fail");
        setTest4(<div>{num} is not divisible by 4.</div>);
      }
    };
    // For 5
    const divisibilityTestFor5 = (num) => {
      if (
        Number.parseInt(num.slice(-1)) === 0 ||
        Number.parseInt(num.slice(-1)) === 5
      ) {
        // console.log(typeof num)
        setTest5(
          <div>
            {num.slice(0, num.length - 1)}
            <span className="underline">{num.slice(-1)}</span> is divisible by
            5. i.e.{" "}
            <span className="font-bold">
              5 X {num / 5}= {num}
            </span>
          </div>
        );
      } else {
        console.log("fail");
        setTest5(<div>{num} is not divisible by 5.</div>);
      }
    };
    // For 9
    const divisibilityTestFor9 = (num, sumArr) => {
      let arr = Array.from(num);
      console.log(arr);
      sumArr = arr.reduce((a, b) => {
        return a + b;
      });
      if (num % 9 === 0) {
        setTest9(
          <div>
            {num} is divisible by 9. i.e.{" "}
            <span className="underline">[ {sumArr} ]</span>{" "}
            <span className="font-bold">
              9 X {num / 9}= {num}
            </span>
          </div>
        );
      } else {
        console.log("fail");
        setTest9(<div>{num} is not divisible by 9.</div>);
      }
      return sumArr;
    };
    // For 10
    const divisibilityTestFor10 = (num) => {
      if (Number.parseInt(num.slice(-1)) === 0) {
        setTest10(
          <div>
            {num.slice(0, num.length - 1)}
            <span className="underline">{num.slice(-1)}</span> is divisible by
            10. i.e.{" "}
            <span className="font-bold">
              10 X {num / 10}= {num}
            </span>
          </div>
        );
      } else {
        console.log("fail");
        setTest10(<div>{num} is not divisible by 10.</div>);
      }
    };

    divisibilityTestFor2(num);
    divisibilityTestFor3(num);
    divisibilityTestFor4(num);
    divisibilityTestFor5(num);
    divisibilityTestFor9(num);
    divisibilityTestFor10(num);
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
            onClick={(e) => {
              e.preventDefault();
              checkDivisibility(num);
            }}
          >
            Check Divisibility For-(2,3,4,5,9,10)
          </button>

          {(test2 || test3 || test4 || test5 || test9 || test10) && (
            <div className="bg-slate-100 py-2 pl-2 rounded-md">
              <div className="">{test2}</div>
              <div className="">{test3}</div>
              <div className="">{test4}</div>
              <div className="">{test5}</div>
              <div className="">{test9}</div>
              <div className="">{test10}</div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default DivisibilityTest;
