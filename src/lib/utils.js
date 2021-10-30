export const setNumberThousand = (num, decimal = 1) => {
  if (num >= 1000) {
    if (num % 1000 < 100) return Math.floor(num / 1000);
    return (num / 1000).toFixed(decimal);
  }
  return num;
};
