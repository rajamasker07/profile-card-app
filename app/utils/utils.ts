export const formatNumber = (num: number) => {
  // Use the toLocaleString method to add suffixes to the number

  return num.toLocaleString('en-US', {

    // add suffixes for thousands, millions, and billions

    // the maximum number of decimal places to use

    maximumFractionDigits: 2,

    // specify the abbreviations to use for the suffixes

    notation: 'compact',

    compactDisplay: 'short'

  });
};