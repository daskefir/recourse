var N = 10;
let x = 0;

function almostFactorial(x, N) {
    if (x < N) {
        x++;
        almostFactorial(x, N);
        return console.log(x);
    }
}

almostFactorial(x, N);