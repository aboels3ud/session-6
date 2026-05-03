// ===== Session 06 - Exercise 1: Temperature Converter =====

function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}

function fahrenheitToCelsius(f) {
  return ((f - 32) * 5) / 9;
}

function convertTemperature(value, unit) {
  if (unit === "C") {
    let result = celsiusToFahrenheit(value);
    return `${value}°C = ${result.toFixed(2)}°F`;
  } else if (unit === "F") {
    let result = fahrenheitToCelsius(value);
    return `${value}°F = ${result.toFixed(2)}°C`;
  } else {
    return "Invalid unit! Use 'C' or 'F'";
  }
}

// Tests
console.log(convertTemperature(0, "C"));
console.log(convertTemperature(100, "C"));
console.log(convertTemperature(98.6, "F"));
console.log(convertTemperature(32, "F"));
