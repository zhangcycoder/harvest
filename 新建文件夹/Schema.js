const mongoose = require('mongoose')


mongoose.item= mongoose.Schema({
	name:{type:String,default:'张赐永'},
	age:{type:String,default:''},
	sex:{type:String,default:''},
	hobby:Array,
	cla:{type:String,default:''},
	time:{type:String,default:''},
})
module.exports = mongoose;