const XRegExp = require('xregexp');
const library = [];
module.exports = {
  register : function(expression, flag, handler){
    library.push({
      expression : XRegExp(expression, flag),
      exec  : handler
    });
  },
  request  : async function(input){
    let matched = undefined;
    let response = null;
    let execute = undefined;
    for(let i = 0; i < library.length; i++){
      matched = XRegExp.exec(input, library[i].expression);
      if(matched){
        execute = library[i].exec;
        break;
      }
    }
    if(matched){
      response = await execute(matched);
    }
    return response;
  },
}
