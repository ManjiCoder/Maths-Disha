import React, { useState } from 'react';
import PrimeFactorDivision from '../components/PrimeFactorDivision';

export default function PrimeDivision() {
  const [num, setNum] = useState('');
  const [calculationData, setCalculationData] = useState([]);
  const { steps, divisors, time } = calculationData;

  const handleOnChangeNum = (e) => {
    let { value } = e.target;
    if (value.length < 6) {
      if (value.includes('.')) {
        value = value.replace('.', '').replace('+e', '');
      }
      setNum(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const worker = new Worker('worker.js');

    worker.postMessage(parseInt(num));

    worker.onmessage = (e) => {
      console.log('Worker processing done: ', e.data);
      setCalculationData(e.data);
    };
    // const primes = generatePrimeNum(num);
    // const data = calculatePrimeFactorsDivision(parseInt(num), primes);
    // data.steps.push({ divisor: null, reminder: null, divident: 1 });
    // console.table(data.steps);
    // console.log(data);
    // setCalculationData(data);
  };

  return (
    <div className='bg-slate-300 min-h-screen max-h-fit'>
      <form className='py-8 space-y-4'>
        <div className='flex flex-col m-auto justify-center w-3/4'>
          <label className='cursor-pointer pl-0.5 mb-2' htmlFor='num-1'>
            <span>Enter Number for Prime Division:</span>
          </label>
          <input
            className='pl-2 py-1.5 bg-slate-50 rounded-md border-2 border-white focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type='number'
            name=''
            id='num-1'
            placeholder='Enter a number'
            onChange={handleOnChangeNum}
            value={num}
          />
        </div>

        <div className='flex flex-col pt-4 space-y-4 m-auto justify-center w-3/4'>
          <button
            className={`${
              num.length === 0
                ? 'cursor-not-allowed brightness-75'
                : 'cursor-pointer brightness-100'
            } text-white  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2.5 text-center`}
            type='submit'
            disabled={num.length === 0}
            onClick={handleSubmit}
          >
            Prime Division {num && 'of ' + num}
          </button>
          <PrimeFactorDivision steps={steps} divisors={divisors} time={time} />
        </div>
      </form>
    </div>
  );
}
