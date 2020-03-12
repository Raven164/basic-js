module.exports = function getSeason(date) {
  if(date == undefined){return 'Unable to determine the time of year!'}
  if (!Object.prototype.toString.call(date).match(['object Date'])) {
    throw new Error();
  }
  const season = ['winter', 'spring', 'summer', 'fall'];
  const month = date.getMonth();
   if (month < 5 && month > 1) {
     return season[1];
  }
  else if (month > 4 && month < 8) {
  return season[2];
  }
  else if (month > 7 && month < 11) {
    return season[3];
  } 
  else {
	return season[0];
  } 
};
