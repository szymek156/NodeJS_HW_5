
let mod = {
    isPrime(number) {
        if (number < 2) {
            throw RangeError(`Number ${number} is out of range`);
        }

        if (number == 2) {
            return true;
        }

        if (number % 2 === 0) {
            return false;
        }

        let div = 3;

        let limit = Math.ceil(Math.sqrt(number));

        while (div <= limit) {
            if (number % div === 0) {
                return false;
            }

            div++;
        }

        return true;
    },

    async factorial(number) {
        // return new Promise(function(resolve, reject){
        //     if (number < 0) {
        //         reject(``);
        //     }
        // });

        if (number < 0) {
            throw RangeError(`Number ${number} is out of range`);
        }

        if (number === 0) {
            return 1;
        }

        let result = 1;

        while (number > 1) {
            result *= number--;
        }

        return result;
    }
};

module.exports = mod;