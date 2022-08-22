import React from "react";
import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <div className="flex flex-col flex-wrap justify-start pt-9 items-center min-h-screen bg-slate-300 dark:bg-slate-900 gap-7">
      <span className="p-3 bg-slate-100 border-2 border-gray-900 rounded-md">
        Welcome To {props.title}
      </span>
      <Link to="divisibilityTest">
        <button className="bg-gradient-to-r from-blue-500 to-indigo-700 text-white text-xl p-3 rounded-lg  hover:bg-blue-700 focus:bg-blue-800">
          Divisibility Test-(2,3,5,9,10)
        </button>
      </Link>
      <Link to="hcflcm">
        <button className="px-20 bg-gradient-to-r from-blue-500 to-indigo-700 text-white text-xl p-3 rounded-lg  hover:bg-blue-700 focus:bg-blue-800">
          HCF / LCM
        </button>
      </Link>
    </div>
  );
}

export default HomePage;
