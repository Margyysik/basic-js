const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  function timesCount(n){
		if (n==1){
			return 1
		} else {
			return timesCount(n-1)*2+1
		}
	}
	const turns = timesCount(disksNumber)
	const seconds = turns*3600/turnsSpeed
	return {
		'turns':turns,
		'seconds':Math.floor(seconds)
	}
};
