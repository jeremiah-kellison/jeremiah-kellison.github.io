document.addEventListener("DOMContentLoaded", function() {
    const temperatureInput = document.getElementById("temperatureInput");
    const convertBtn = document.getElementById("convertBtn");
    const convertedOutput = document.getElementById("convertedOutput");
    const toggleSwitch = document.getElementById("toggleSwitch");
  
    convertBtn.addEventListener("click", function() {
      const temperature = parseFloat(temperatureInput.value);
      if (!isNaN(temperature)) {
        if (toggleSwitch.checked) {
          // Convert Fahrenheit to Celsius
          const celsius = (temperature - 32) * (5/9);
          convertedOutput.value = celsius.toFixed(2);
        } else {
          // Convert Celsius to Fahrenheit
          const fahrenheit = (temperature * (9/5)) + 32;
          convertedOutput.value = fahrenheit.toFixed(2);
        }
      } else {
        convertedOutput.value = "Invalid input";
      }
    });
  });
  