import groupDiscount from '../discount';

describe('groupDiscount', () => {
  test('it should return correct discounted price', () => {
    expect(groupDiscount(6, 2.5, 2, 4)).toBe(12);
    expect(groupDiscount(7, 0.65, 6, 3.25)).toBe(3.9);
  });
  test('discounted price should not be higher than full price', () => {
    expect(groupDiscount(6, 1, 3, 4)).toBe(6);
  });
});
