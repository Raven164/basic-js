module.exports = function countCats() {
	let temp = [];
  let count = 0;
  for (var i = 0; i < arguments.length; i++) {
	temp[i] = arguments[i];
}
  temp = temp.join('').split(',')
  for(let i = 0; i < temp.length; i++){
	if(temp[i] == '^^'){
		count++;
	}
  }
  return count;
};