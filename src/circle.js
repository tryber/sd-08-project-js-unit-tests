const circle = (radius) => {
  const PI = 3.14;
  if (!radius) { return undefined; }
  return {
    radius,
    area: PI * radius * radius,
    circumference: 2 * PI * radius,
  };
};

module.exports = circle;
