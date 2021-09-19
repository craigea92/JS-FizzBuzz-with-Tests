describe('FizzBuzz', () => {

  let fizzBuzz;

  beforeEach(() => {
    fizzBuzz = new FizzBuzz();
  });

  describe('multiples of 3', () => {
    it('replaces with Fizz', () => {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });
  })
})