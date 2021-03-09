const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array) {
  	let result = 0
    if (Array.isArray(array)){
    	for (let i =0; i<array.length; i++){
    		result = Math.max(this.calculateDepth(array[i]), result)
    	}
    	result++
    }
    return result
};
};
