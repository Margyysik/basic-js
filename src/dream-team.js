const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = ''
  if (Array.isArray(members)) {
	 	for (let name of members){
	 		if(typeof(name)=='string'){
	 			result+=name.trim()[0].toUpperCase()
	 		}
	 	} return result.split('').sort().join('')
	 } else{
	 	return false
	 }
};
