function isPrime(n: number): boolean {

    if (n <= 1) {
        return false;
    }

    for (let i = 2; i < n; i++) {

        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

const n = 17;

if (isPrime(n)) {
    console.log(`${n} is a prime number`);
} else {
    console.log(`${n} is not a prime number`);
}