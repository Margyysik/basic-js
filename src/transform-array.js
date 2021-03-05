const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	 throw new CustomError('Not implemented');
/* let result = []
  	if (Array.isArray(arr)){
	  	for(let i = 0; i<arr.length; i++){
	  		if(arr[i]=='--double-next'){
	  			if (i<arr.length-1 &&typeof(arr[i+1])=='number') {
	  				result.push(arr[i+1])
	  			}
	  		}else if(arr[i]=='--discard-prev'){
	  			if(i>0&&typeof(arr[i-1])=='number'&&arr[i-2]!='--discard-next'){
	  				result.pop()
	  			}
	  			
	  		}else if(arr[i]=='--discard-next'){
	  			if (i<arr.length-1&&typeof(arr[i+1])=='number') {
	  				i++
	  			}
	  		}else if(arr[i]=='--double-prev'){
	  			if(i>0&&typeof(arr[i-1])=='number'&&arr[i-2]!='--discard-next'){
	  				result.push(arr[i-1])
	  			}
	  		}else{
	  			result.push(arr[i])
	  		}
	  	}return result
  	} else{
  		throw new Error
  	}*/
};
