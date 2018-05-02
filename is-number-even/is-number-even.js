isNumberEven = number => {
	// Remove decimal point to handle floats
	const defloatedNumber = parseInt(number.toString().replace('.', ''));
	const halfedNumber = defloatedNumber / 2;
	// If the half of the given number is equal to the floor of its half, it's even.
  	return Math.floor(halfedNumber) == halfedNumber;
};

module.exports = isNumberEven;
