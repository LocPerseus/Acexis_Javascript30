function isPrime(el, i, arr) {
    let start = 2;
    while (start <= Math.sqrt(el)) {
        if (el % start++ < 1) {
            return false;
        }
    }
    return el > 1;
}
console.log([4, 6, 8, 12, 9].find(isPrime));