/* eslint-disable no-restricted-globals */
const generatePrimeNum = (num) => {
  const primes = new Set();
  primes.add(2);
  if (num < 2) {
    alert(num + 'Now allowed!');
    primes.remove(2);
  }

  for (let i = 3; i <= num; i++) {
    for (let j = 2; j < i; j++) {
      const isDivisible = i % j === 0;
      primes.add(i);
      if (isDivisible) {
        primes.delete(i);
        break;
      }
    }
  }

  return Array.from(primes);
};

const calculatePrimeFactorsDivision = (num) => {
  let primeArr = generatePrimeNum(num);
  const t0 = performance.now();
  const payload = {
    steps: [],
  };
  for (let primeNum of primeArr) {
    const isDivisible = num % primeNum === 0;
    let reminder = num / primeNum;
    if (isDivisible) {
      while (reminder !== 1) {
        payload.steps.push({ divisor: primeNum, divident: num, reminder });
        // console.log("before", { reminder, divisor: primeNum });
        num = reminder;
        primeArr = generatePrimeNum(reminder);
        reminder = num / primeNum;
        if (Math.floor(reminder) !== Math.ceil(reminder)) break;
        // console.log("after", { reminder, divisor: primeNum });
      }
      if (Math.floor(reminder) === Math.ceil(reminder)) {
        payload.steps.push({ divisor: primeNum, divident: num, reminder });
      }
    }
  }
  payload.steps.push({ divisor: null, divident: 1, reminder: null });
  payload.divisors = payload.steps
    .filter(({ divisor }) => divisor)
    .map(({ divisor }) => divisor);
  const t1 = performance.now();
  const timeDiff = (t1 - t0) / 100;
  payload.time = timeDiff;
  // console.log(timeDiff)
  return payload;
};

self.onmessage = (e) => {
  console.log('Worker received data: ', e.data);
  const data = calculatePrimeFactorsDivision(e.data);
  self.postMessage(data);
};
