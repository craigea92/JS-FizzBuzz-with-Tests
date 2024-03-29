class FizzBuzz {

  _isDivisibleBy(divisor, number) {
    return number % divisor === 0;
  };

  play(number) {
    if (this._isDivisibleBy(15, number)) {
      return 'FizzBuzz';
    } else if (this._isDivisibleBy(3, number)) {
      return 'Fizz'
    } else if (this._isDivisibleBy(5, number)) {
      return 'Buzz'
    } else {
      return 'Not Divisible by 3 and/or 5';
    }
  };
};