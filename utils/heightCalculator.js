export const heightCalculator = (height) => {
  const inches = parseInt(height);
  const feet = Math.floor(inches / 12);
  const remainingInches = inches % 12;
  const feetString = feet > 0 ? `${feet} feet` : "";
  const inchesString = remainingInches > 0 ? ` ${remainingInches} inches` : "";

  return `${feetString}${inchesString}`.trim();
};
