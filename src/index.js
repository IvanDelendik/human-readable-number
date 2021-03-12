module.exports = function toReadable(number) {
    const otherNumbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const decimal = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
        "hundred",
    ];

    const str = String(number);

    if (number >= 0 && number <= 19) {
        return otherNumbers[number];
    }

    if (number >= 20 && number <= 99) {
        if (number % 10 === 0) {
            return decimal[number / 10];
        }

        return `${decimal[str[0]]} ${otherNumbers[str[1]]}`;
    }

    if (number >= 100 && number <= 999) {
        if (number % 100 === 0) {
            number = number / 100;
            return `${otherNumbers[number]} ${decimal[10]}`;
        }

        if (+str[1] === 1)
            return `${otherNumbers[str[0]]} ${decimal[10]} ${
                otherNumbers[str[1] + str[2]]
            }`;
        else
            return (
                otherNumbers[str[0]] +
                " " +
                decimal[10] +
                (+str[1] === 0 ? "" : " " + decimal[str[1]]) +
                (+str[2] === 0 ? "" : " " + otherNumbers[str[2]])
            );
    }
};
