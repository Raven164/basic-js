module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)){ return false }
  let result = members.map(function(element){
      if(typeof(element) === 'string') {
        return element.match(/[a-z]/i).join('').toUpperCase();
      }
    }
   )
  return result.sort().join('');
};