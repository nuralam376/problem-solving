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

//Calculates the total wood required for making the chair, table and bed
function woodCalculator(chair, table, bed) {
	// If any of the inputs is negative or not numbers, then return the error message
	if (chair < 0 || table < 0 || bed < 0) {
		return "Inputs cannot be negative. Please recheck the inputs.";
	} else if (
		typeof chair != "number" ||
		typeof table != "number" ||
		typeof bed != "number"
	) {
		return "Inputs must be numbers.Please recheck the inputs";
	} else {
		var chairCount = chair * 1; // 1 chair = 1 wood;
		var tableCount = table * 3; // 1 table = 3 wood
		var bedCount = bed * 5; // 1 bed = 5 bed
		var totalWood = chairCount + tableCount + bedCount; // calculates the total wood
		return totalWood;
	}
}
