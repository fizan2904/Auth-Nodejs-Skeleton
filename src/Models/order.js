import mongoose from 'mongoose';

let OrderSchema = mongoose.Schema({
	uid : {
		type : mongoose.Schema.Types.ObjectId,
		ref : 'user'
	},
	size : {
		type : Number,
		required : true
	},
	address : {
		type : String,
		required : true
	},
	price : {
		type : Number,
		required : true
	}
}, {
	timestamps : true
});

mongoose.model('orders', OrderSchema);