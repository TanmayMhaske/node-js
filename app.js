const _ = require('lodash')

const items = [1,2,[3,5,[4]]]

const newItems = _.flatMapDeep(items);

console.log(newItems);