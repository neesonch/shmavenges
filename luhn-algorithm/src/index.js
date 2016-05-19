/**
 * Function to check if card number is correct
 * Uses Luhn Algorithm
 * @param cardNumber
 * @returns {boolean}
 */
 
function check(cardNumber) {
	var rev = cardNumber.toString().split('').reverse();
	var s1 = 0;
	var s2 = [];
	// Sum even-index numbers, else double and split odd-index numbers into array for further processing
	for (var i=0; i<rev.length; i++){
		if(i%2==0){
			s1 += parseInt(rev[i]);
		}
		else{
			s2.push(rev[i]*2);
		}
	}
	// Split odd-index numbers into constituent digits
	var digitsArray = [];
	for (var i=0; i<s2.length; i++){
		var digits = s2[i].toString().split('');
		digitsArray = digitsArray.concat(digits);
	}
	// Sum digits in digitsArray and assign to s2
	s2 = 0;
	for (var i=0; i<digitsArray.length; i++){
			s2 += parseInt(digitsArray[i]);
	}
	// Check that last digit of sum of s1 & s2 is 0
	return((s1+s2)%10==0)
}

module.exports = {
    'check': check
};
