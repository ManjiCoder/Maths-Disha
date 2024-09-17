export const generatePrimeNum = (num) => {
  const primes = new Set();
  if (num === 2) {
    primes.add(2);
  } else if (num < 2) {
    alert(num + "Now allowed!");
  } else {
    primes.add(2);
  }

  for (let i = 3; i <= num; i++) {
    for (let j = 2; j < i; j++) {
      const isDivisible = i % j === 0;
      if (isDivisible) {
        primes.delete(i);
        break;
      } else if (!isDivisible) primes.add(i);
    }
  }

  return Array.from(primes);
};

export const calculatePrimeFactorsDivision = (num, primeArr) => {
  const steps = [];
  for (let primeNum of primeArr) {
    const isDivisible = num % primeNum === 0;
    let reminder = num / primeNum;
    if (isDivisible) {
      while (reminder !== 1) {
        steps.push({ divisor: primeNum, divident: num, reminder });
        // console.log("before", { reminder, divisor: primeNum });
        num = reminder;
        primeArr = generatePrimeNum(reminder);
        reminder = num / primeNum;
        if (Math.floor(reminder) !== Math.ceil(reminder)) break;
        // console.log("after", { reminder, divisor: primeNum });
      }
      if (Math.floor(reminder) === Math.ceil(reminder)) {
        steps.push({ divisor: primeNum, divident: num, reminder });
      }
    }
  }
  console.log(steps.map(({ divisor }) => divisor));
  return steps;
};
