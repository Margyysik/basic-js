const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0
  for (let arr of matrix){
  	for (let i of arr){
  		if (i =='^^'){
  			result++
  		}
  	}
  } return result
};
