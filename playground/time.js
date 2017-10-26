var moment = require('moment');


// var date =  new Date();
//
// var month = ['Jan','Feb']
// console.log(date.getMonth())

var someTimestamp = moment().valueOf();
console.log(someTimestamp)
var createdAt = 1234;
var date = moment(someTimestamp);
console.log(date.format('LT'))

//console.log(date.format('LT - ') +date.format('DD/MMM/YYYY'))
