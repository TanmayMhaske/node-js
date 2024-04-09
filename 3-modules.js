//Common JS every file is a module
//Modules - 
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternate-export-flavor');
require('./7-mindgranade')


console.log(data);
sayHi('Tanmay');
sayHi(names.jonh);
sayHi(names.susan);