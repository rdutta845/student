

var mongoose=require('mongoose');


var StudentSchema = new mongoose.Schema({
	regNo :{ 
		type : String,
		unique: true
	},
	rollNo : {
		type: Number,
		unique: true,
		
	},
	name : {
		first : String,
		last : String
	},
	
	CollegeName : String,
	address : {
		city : String,
		country : String,
		state : String
	}
});

module.exports = mongoose.model('Student',StudentSchema);
//mongoose is a odm object data model 