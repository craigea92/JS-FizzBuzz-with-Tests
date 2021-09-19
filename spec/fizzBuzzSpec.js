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

  describe('multiples of 5', () => {
    it('replaces with Buzz', () => {
      expect(fizzBuzz.play(5)).toEqual('Buzz')
    });
  })

  describe('multiples of 3 & 5', () => {
    it('replaces with FizzBuzz', () => {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz')
    });
  })
})