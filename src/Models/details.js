import mongoose from 'mongoose';

let DetailsSchema = mongoose.Schema({
	uid : {
		type : mongoose.Schema.Types.ObjectId,
		ref : 'user'
	},
	address : {
		type : String,
		required : true
	},
	mobile : {
		type : Number
	},
	email : {
		type : String,
		lowercase : true
	}
}, {
	timestamps : true
});

mongoose.model('details', DetailsSchema);