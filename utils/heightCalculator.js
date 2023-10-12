export const heightCalculator = (height) => {
  const inches = parseInt(height);
  const feet = Math.floor(inches / 12);
  const remainingInches = inches % 12;
  const feetString = feet > 0 ? `${feet}'` : "";
  const inchesString = remainingInches > 0 ? `${remainingInches}"` : "";

  return `${feetString}${inchesString}`.trim();
};
