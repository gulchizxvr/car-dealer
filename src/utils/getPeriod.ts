export const getPeriod = (): number[] => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: currentYear - 2014 }, (_, i) => 2015 + i);
};
