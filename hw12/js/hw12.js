// var data = require('../json/5objs.json'); 
import data from '../json/5objs.json' assert {type: 'JSON'}; 

var json = JSON.parse(data); 

console.log(data.square1); 