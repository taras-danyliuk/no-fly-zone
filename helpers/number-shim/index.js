export const inRange = (value, options) => {
  const { min = -Infinity, max = Infinity } = options;

  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }

  return value;
};

const percentIs = (value, target, round, transform) => {
  const sum = (value * target) / 100;

  return Math.round(sum);
};

export const NumberShim = {
  inRange,
  percentIs,
};
