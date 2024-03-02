export const randomNumberArray = (
  min: number,
  max: number,
  count: number
): number[] => {
  const result: number[] = [];
  const range = max - min + 1;

  if (count > range) {
    return [];
  }

  while (result.length < count) {
    const randomNumber = Math.floor(Math.random() * range) + min;
    if (!result.includes(randomNumber)) {
      result.push(randomNumber);
    }
  }

  return result;
};
