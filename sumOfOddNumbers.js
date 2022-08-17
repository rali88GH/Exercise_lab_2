function sumOfOddNumbers(n) {

    let printNumber = 1;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        console.log(printNumber);
        sum += printNumber;
        printNumber += 2;
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);
sumOfOddNumbers(3);