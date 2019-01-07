const lib    = require("../app/lib");
const assert = require("assert").strict;

class TestLib {
    setUp() {}

    tearDown() {}

    test2IsPrime() {
        assert.equal(lib.isPrime(2), true);
    }

    test23IsPrime() {
        assert.equal(lib.isPrime(23), true);
    }

    test25IsComposite() {
        assert.equal(lib.isPrime(25), false);
    }

    testPrimeNegativeNumberThrows() {
        assert.throws(() => lib.isPrime(-25), RangeError);
    }

    testPrime1And0Throws() {
        assert.throws(() => lib.isPrime(0), RangeError);
        assert.throws(() => lib.isPrime(1), RangeError);
    }


    "test factorial rejects negative number"() {
        assert.rejects(async () => await lib.factorial(-1), RangeError);
    }

    async "test factorial of 0 is 1"() {
        assert.equal(await lib.factorial(0), 1);
    }

    async "test factorial of 5 is 120"() {
        assert.equal(await lib.factorial(5), 120);
    }


    async "test factorial of 20 is 2432902008176640000"() {
        assert.equal(await lib.factorial(20), 2432902008176640000);
    }
}


module.exports = TestLib;