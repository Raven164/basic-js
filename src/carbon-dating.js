const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample() {
  
  // remove line with error and write your code here
  let result = arguments[0];
  if(typeof(result) != 'string') {return false ;} 
  result = result.replace(/[^.\d\-]+/g,"").replace( /^([^\.]*\.)|\./g, '$1' );
  result = Number(result);
  if(isNaN(result)){return false}
  if((result>15)||(result < 1)){return false ;}
  else{return Math.ceil(Math.log(MODERN_ACTIVITY /result )/(0.693/HALF_LIFE_PERIOD));}
};
