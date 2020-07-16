// Converts feet input to mile and return the result of the mile
function feetToMile(feet) {
	// If feet is negative or not numbers, then return the error message
	if (feet < 0) {
		return "Feet cannot be negative.Please recheck the input";
	} else if (typeof feet != "number") {
		return "Feet must be a number. Please recheck the input";
	} else {
		var mile = feet / 5280; // 1 mile = 5280 feet
		return mile;
	}
}
