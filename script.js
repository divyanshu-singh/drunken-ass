let display = document.getElementById("display");
let quantity = document.getElementById("Q");
let price = document.getElementById("P");
let volume = document.getElementById("A");

function clearDisplay() {
    display.innerHTML = ""; // Clear previous display

    // Function to check if a number is a natural number (positive integer)
    function isNaturalNumber(num) {
        return Number.isInteger(num) && num > 0;
    }

    // Extract the values from the input elements
    let quantityValue = Number(quantity.value);
    let priceValue = Number(price.value);
    let volumeValue = Number(volume.value);

    // Initialize a flag to track if there are any errors
    let hasError = false;

    // Validate that all inputs are natural numbers
    if (!isNaturalNumber(quantityValue) || !isNaturalNumber(priceValue) || !isNaturalNumber(volumeValue)) {
        hasError = true;
    }

    // If there's any error, show a single error message and exit the function
    if (hasError) {
        display.innerHTML = "Ae! bakchodi nahi";
        return; // Exit the function if validation fails
    }

    // Perform the calculation if all inputs are valid
    const result = (quantityValue * (volumeValue / 100)) / priceValue;

    // Format the result to 2 decimal places
    const formattedResult = result.toFixed(2);

    // Display the result
    display.innerHTML = `${formattedResult} drunk quotient per rupee.`;
}
