import { USD_TO_PLN, convertPLNToUSD } from './../convertPLNtoUSD';


const convertedToDolar = (pln) => `$${((pln / USD_TO_PLN).toFixed(2))}`


describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe(convertedToDolar(1));
    expect(convertPLNToUSD(2)).toBe(convertedToDolar(2));
    expect(convertPLNToUSD(20)).toBe(convertedToDolar(20));
    expect(convertPLNToUSD(12)).toBe(convertedToDolar(12));
    expect(convertPLNToUSD('6')).toBe(convertedToDolar(6));
    expect(convertPLNToUSD('16')).toBe(convertedToDolar(16));
    expect(convertPLNToUSD('26')).toBe(convertedToDolar(26));

  });

  it('should return NaN when input is text', () => {
    expect(convertPLNToUSD('abc')).toBeNaN();
  });

  it('should return NaN when input is empty', () => {
    expect(convertPLNToUSD()).toBeNaN();
  });

  it('should return "Error" when input is different than number and string', () => {
    expect(convertPLNToUSD({})).toBe('Error');
    expect(convertPLNToUSD([])).toBe('Error');
    expect(convertPLNToUSD(null)).toBe('Error');
    expect(convertPLNToUSD(function () { })).toBe('Error');
  });

  it('should return zero when input is lower than zero', () => {
    expect(convertPLNToUSD(-1)).toBe(convertedToDolar(0));
    expect(convertPLNToUSD(-2)).toBe(convertedToDolar(0));
    expect(convertPLNToUSD(-56)).toBe(convertedToDolar(0));
    expect(convertPLNToUSD('-543')).toBe(convertedToDolar(0));
  });

});