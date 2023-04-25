
export const USD_TO_PLN = 5.5;

export const convertPLNToUSD = (PLN) => {
  const PLNtoUSD = PLN / USD_TO_PLN;
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  const isPlnNotANumber = Boolean(PLN / 0) === false

  if (typeof PLN === 'undefined') {
    return NaN
  }
  if (typeof PLN === 'object') {
    return 'Error';
  }
  if (typeof PLN === 'function') {
    return 'Error';
  }
  if (isPlnNotANumber) {
    return NaN
  }
  if (PLN <= 0) {
    return '$0.00'
  }

  return formatter.format(PLNtoUSD)

}