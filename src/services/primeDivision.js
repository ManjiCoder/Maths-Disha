export const generatePrimeNum = (num) => {
  const primes = new Set();
  if (num === 2) {
    primes.add(2);
  } else if (num < 2) {
    alert("Now allowed!");
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
