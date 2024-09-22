const add = (a, b) => {
	return a + b;
};

const subtract = (a, b) => {
	return a - b;
};

const multiply = (a, b) => {
	return a * b;
};

const divide = (a, b) => {
	return a / b;
};

const validNum = (val) => {
	const dataType = typeof val;
	if (dataType === "number") return true;
	return false;
};

const isZero = (val) => {
	const isValid = validNum(val);
	if (isValid) {
		if (val === 0) {
			return true;
		}
	}
	return false;
};

export default calculate = (a, b, operator) => {
	operator = operator.toLowerCase();
	const validA = validNum(a);
	const validB = validNum(b);

	if (!validA || !validB) return "Invalid number";

	switch (operator) {
		case "add":
			return add(a, b);
		case "subtract":
			return subtract(a, b);
		case "multiply":
			return multiply(a, b);
		case "divide":
			if (isZero(b)) {
				return "Cannot divide by zero";
			}
			return divide(a, b);
		default:
			return "Invalid operator";
	}
};
