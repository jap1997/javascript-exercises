const convertToCelsius = function(farhenheitTemp) {
  const res = (farhenheitTemp - 32) * 5/9
  return Number(res.toFixed(1))
};

const convertToFahrenheit = function(celsiusTemp) {
  const res = (celsiusTemp * 9/5 + 32) 
  return Number(res.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
