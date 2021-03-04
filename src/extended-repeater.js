const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let additions = []
	if(options.additionRepeatTimes){
		for (let i = 0; i<options.additionRepeatTimes;i++){
			additions.push(String(options.addition))
		}
	}else{
		additions.push(options.addition)
	}
	let result = []
	if(options.repeatTimes){
		for (let i =0;i<options.repeatTimes;i++){
			if (options.additionSeparator){
				result.push(String(str)+additions.join(options.additionSeparator))
			}else{
				result.push(String(str)+additions.join('|'))
			}
		}
		if (options.separator){
			return result.join(options.separator)
		} else{
			return result.join('+')
		}
	}else{
		return str+options.addition
	}	
};
  
