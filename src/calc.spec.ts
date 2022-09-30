import { Calc } from './calc'

describe('Calc', () => {
  test('should return 10 for add(6, 4)', () => {
    expect(new Calc().add(6, 4)).toBe(10);
  });

  test('should return 9 for add(10, -1)', () => {
    expect(new Calc().add(10, -1)).toBe(9);
  });
  
  test('should return 8 for multipl(4,2)', () => {
    expect(new Calc().multiply(4,2)).toBe(8);
  });

  test('should return 27 for multipl(9,3)', () => {
    expect(new Calc().multiply(9,3)).toBe(27);
  });

  test('should return 9 for square(3)', () => {
    expect(new Calc().square(3)).toBe(9);
  });
  test('should return 144 for square(12)', () => {
    expect(new Calc().square(12)).toBe(144);
  });

});